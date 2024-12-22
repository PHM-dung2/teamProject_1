document.querySelectorAll("select option")[2].selected = true;
logInFunc();
let listType = "day";

// 셀렉트 박스에 선택된 값을 넘겨주기
function changeSelect(str){
    if(str == "sDay"){ 
        page = 0; currentPage = 1; listType = "day"; listFunc(); // 순서잘보기
    }
    else if(str == "sMonth"){ 
        page = 0; currentPage = 1; listType = "month"; monthListFunc();
    } 
    else if(str == "sYear"){ 
        page = 0; currentPage = 1; listType = "year"; yearListFunc(); 
    } // if end
} // f end

// 출력
function outputFunc(html){
    let tableList = document.querySelector('.tableList')
    tableList.innerHTML = html;
} // f end

// 일별 리스트
listFunc();
function listFunc(){
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    saleArray.sort(function(a,b) {
        return a.no - b.no || new Date(b.date) - new Date(a.date);
    });
    
    totalCount = saleArray.length;
    pagingFunc( );
    printList( saleArray );
    let printArray = JSON.parse( localStorage.getItem( 'printList'));
    while ( printArray.length < 10 ) {
        let board = {
            "sno": "",
            "type": "-1",
            "date": "",
            "count": "",
            "pno": "",
            "no": ""
        }
        printArray.push( board );
    }
    console.log( printArray );
   
    let html = ``;
    for( let i = 0 ; i < 10 ; i++){
        let info1 = printArray[i];
        let sName = '';
        let price = '';
        let pType = '';
        let pName = '';

        for( let j = 0 ; j < sampleArray.length ; j++ ){
            let info2 = sampleArray[j];
            if( info1.no == info2.no ) {
                sName = info2.sName;
            } // if end
        } // for2 end

        for( let j = 0 ; j < productArray.length ; j++ ){
            let info3 = productArray[j];
            if( info1.pno == info3.pno ){
                pName = info3.pName;
                price = info3.price;
            } // if end
        } // for 3 end

        if( info1.type == 0 ){ pType = "구매"; }
        else if( info1.type == 1 ){ pType = "판매"; }
        else if( info1.type == 2 ){ pType = "환불"; }
        
        // 출력
        html += `<tr>
                    <td>${ sName }</td>
                    <td>${ pType }</td>
                    <td>${ info1.date }</td>
                    <td>${ pName }</td>
                    <td>${ info1.count }</td>
                    <td>${ price == '' ? '' : (price * info1.count).toLocaleString('ko-KR') }</td>
                    <td class="tableBtn">
                        ${ price == '' ? '' : 
                        `<button onclick="updateFunc(${ info1.sno })" type="button">수정</button>
                        <button onclick="deleteFunc(${ info1.sno })" type="button">삭제</button>`}
                    </td>
                </tr>`
    } // for1 end
    
    setSaleList( saleArray );
    outputFunc(html);
} // f end

// 월별 리스트
function monthListFunc(){
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    let date = new Date();
    let nowYear = date.getFullYear();
    let monthArray = monthList();
    
    for( let year = nowYear ; year >= nowYear-5 ; year-- ){
        if( monthArray[0] != null ) { break; }
        for( let month = 12 ; month >= 1 ; month-- ){
            let sName = '';
            let pName = '';
            let price = 0;
            let count = 0;
            // 관리자정보 배열 매칭
            for( let j = 0 ; j < sampleArray.length ; j++ ){
                // 제품정보 배열 매칭
                for( let k = 0 ; k < productArray.length ; k++ ){
                    // 매출관리 배열 매칭
                    for( let i = 0 ; i < saleArray.length ; i++ ){
                        let sale = saleArray[i];
                        let day = sale.date.split(`-`);
                        let sample = sampleArray[j];
                        let product = productArray[k];
                        // 년도/월/관리자번호/제품번호 매칭
                        if( day[0] == year && day[1] == month && sample.no == sale.no && product.pno == sale.pno ){
                            sName = sample.sName;
                            pName = product.pName;
                            price = product.price;
                            if( sale.type == 0 || sale.type == 2 ){ count -= sale.count; }
                            else if( sale.type == 1 ){ count += sale.count; }
                        } // if end
                    } // for end
                    
                    // 월별 배열 추가
                    if( sName != ''){ 
                        let board = {
                            "sName" : sName ,
                            "year" : year ,
                            "month" : month ,
                            "pName" : pName ,
                            "count" : count ,
                            "price" : (price * count).toLocaleString('ko-KR')
                        }
                        monthArray.push( board );
                        sName = '';
                        pName = '';
                        price = 0;
                        count = 0;
                    } // if end
                } // for end
            } // for end    
        } // for1 end
    } // for end

    totalCount = monthArray.length;
    pagingFunc( );
    printList( monthArray );
    let printArray = JSON.parse( localStorage.getItem( 'printList'));
    while ( printArray.length < 10 ) {
        let board = {
            "sName": "",
            "year": "",
            "month": "", 
            "pName": "",
            "count": "",
            "price": ""
        }
        printArray.push( board );
    }
    console.log( printArray );
    
    let html = ``;
    for( let i = 0 ; i < printArray.length ; i++ ){
        let info = printArray[i];
        html += `<tr>
                    <td>${ info.sName }</td>
                    <td>${ info.year }${ info.year == '' ? '' : "년" }</td>
                    <td>${ info.month }${ info.year == '' ? '' : "월" }</td>
                    <td>${ info.pName }</td>
                    <td>${ info.count }</td>
                    <td>${ info.price }</td>
                    <td class="tableBtn">
                    </td>
                </tr>`;
    } // for end
    setMonthList( monthArray );
    outputFunc(html);
}

// 년도별 리스트
function yearListFunc(){
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    let date = new Date();
    let nowYear = date.getFullYear();
    let yearArray = yearList();

    for( let year = nowYear ; year >= nowYear-5 ; year-- ){
        let sName = '';
        let pName = '';
        let price = 0;
        let count = 0;
        if( yearArray[0] != null ){ break; }
        // 관리자정보 배열 매칭
        for( let j = 0 ; j < sampleArray.length ; j++ ){
            // 제품정보 배열 매칭
            for( let k = 0 ; k < productArray.length ; k++ ){
                // 매출관리 배열 매칭
                for( let i = 0 ; i < saleArray.length ; i++ ){
                    let sale = saleArray[i];
                    let day = sale.date.split(`-`);
                    let sample = sampleArray[j];
                    let product = productArray[k];
                    if( day[0] == year && sample.no == sale.no && product.pno == sale.pno ){
                        sName = sample.sName;
                        pName = product.pName;
                        price = product.price;
                        if( sale.type == 0 || sale.type == 2 ){ count -= sale.count; }
                        else if( sale.type == 1 ){ count += sale.count; }
                    } // if end
                } // for end

                // 년도별 배열 추가
                if( sName != ''){ 
                    let board = {
                        "sName" : sName ,
                        "year" : year ,
                        "pName" : pName ,
                        "count" : count ,
                        "price" : (price * count).toLocaleString('ko-KR')
                    }
                    yearArray.push( board );
                    sName = '';
                    pName = '';
                    price = 0;
                    count = 0;
                } // if end
            } // for end
        } // for end    
    } // for end

    totalCount = yearArray.length;
    pagingFunc( );
    printList( yearArray );
    let printArray = JSON.parse( localStorage.getItem( 'printList'));
    while ( printArray.length < 10 ) {
        let board = {
            "sName": "",
            "year": "",
            "pName": "",
            "count": "",
            "price": ""
        }
        printArray.push( board );
    }
    console.log( printArray );

    let html = ``;
    for( let i = 0 ; i < printArray.length ; i++ ){
        let info = printArray[i];
        html += `<tr>
                    <td>${ info.sName }</td>
                    <td></td>
                    <td>${ info.year }${ info.year == '' ? '' : "년" }</td>
                    <td>${ info.pName }</td>
                    <td>${ info.count }</td>
                    <td>${ info.price }</td>
                    <td class="tableBtn">
                    </td>
                </tr>`;
    } // for end
    setYearList( yearArray );
    outputFunc(html);
} // f end

// 수정 html 출력
function updateFunc( sno ){
    
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    saleArray.sort(function(a,b) {
        return a.no - b.no || new Date(b.date) - new Date(a.date);
    });

    let html = ``;
    let s1 = 0;
    let s2 = 0;
    for( let i = 0 ; i < saleArray.length ; i++){
        let info1 = saleArray[i];
        let sName = '';
        let price = '';
        let pType = '';
        let pName = '';

        for( let j = 0 ; j < sampleArray.length ; j++ ){
            let info2 = sampleArray[j];
            if( info1.no == info2.no ) {
                sName = info2.sName;
            } // if end
        } // for2 end

        for( let j = 0 ; j < productArray.length ; j++ ){
            let info3 = productArray[j];
            if( info1.pno == info3.pno ){
                pName = info3.pName;
                price = info3.price;
            } // if end
        } // for 3 end

        if( info1.type == 0 ){ pType = "구매" }
        else if( info1.type == 1 ){ pType = "판매" }
        else if( info1.type == 2 ){ pType = "환불" }

        // 출력
        if( info1.sno == sno ){
            s1 = info1.type;
            s2 = info1.pno;
            html += `<tr>
                        <td>${ sName }</td>
                        <td>
                            <select id="selectBox1" name="selectBox1">
                                <option value="0" ${s1 === 0 ? 'selected' : ''}>구매</option>
                                <option value="1" ${s1 === 1 ? 'selected' : ''}>판매</option>
                                <option value="2" ${s1 === 2 ? 'selected' : ''}>환불</option>
                            </select>
                        </td>
                        <td><input id="sDate" type="date" value="${ info1.date }"/></td>
                        <td>
                            <select id="selectBox2" name="selectBox2">
                                <option value="1" ${s2 === 1 ? 'selected' : ''}>호밀빵</option>
                                <option value="2" ${s2 === 2 ? 'selected' : ''}>든든우유</option>
                                <option value="3" ${s2 === 3 ? 'selected' : ''}>치즈케이크</option>
                                <option value="4" ${s2 === 4 ? 'selected' : ''}>마카롱</option>
                                <option value="5" ${s2 === 5 ? 'selected' : ''}>메론빵</option>
                            </select>
                        </td>
                        <td><input id="sCount" type="text" value="${ info1.count }"/></td>
                        <td>${ (price * info1.count).toLocaleString('ko-KR') }</td>
                        <td class="tableBtn">
                            <button onclick="updateInputFunc(${ sno })" type="button">완료</button>
                            <button onclick="listFunc()" type="button">취소</button>
                        </td>
                    </tr>` 
        }else{
            html += `<tr>
                        <td>${ sName }</td>
                        <td>${ pType }</td>
                        <td>${ info1.date }</td>
                        <td>${ pName }</td>
                        <td>${ info1.count }</td>
                        <td>${ (price * info1.count).toLocaleString('ko-KR') }</td>
                        <td class="tableBtn">
                            <button onclick="updateFunc(${ info1.sno })" type="button">수정</button>
                            <button onclick="deleteFunc(${ info1.sno })" type="button">삭제</button>
                        </td>
                    </tr>`
        } // if end

    } // for1 end
    outputFunc(html);

    
} // f end

function updateInputFunc( sno ){
    let saleArray = saleList();
    if(!confirm("수정하시겠습니까?")){
        return;
    }
    let s1 = document.getElementById("selectBox1").selectedIndex;
    let s2 = document.getElementById("selectBox2").selectedIndex + 1;
    let date = document.querySelector('#sDate').value;
    let count = document.querySelector('#sCount').value;

    for( let i = 0 ; i < saleArray.length ; i++ ){
        let info = saleArray[i];
        if( info.sno == sno ){
            board = {
                "sno" : info.sno ,
                "type" : s1 ,
                "date" : date ,
                "count" : count ,
                "pno" : s2 ,
                "no" : info.no
            }
            saleArray[i] = board;
            break;
        } // if end
        
    } // for end
    setSaleList( saleArray );
    listFunc();
    resetList()
} // f end

function deleteFunc( sno ){
    // Y/N 유효성검사
    if(!confirm("삭제하시겠습니까?")){
        return;
    }
    let saleArray = saleList();
    for( let i = 0 ; i < saleArray.length ; i++ ){
        let info = saleArray[i];
        if( info.sno == sno ){
            saleArray.splice( i , 1 );
            break;
        }
    } // for end

    if(saleArray.length % 10 == 0){ currentPage-- }
    setSaleList( saleArray );
    listFunc();
    resetList()
}