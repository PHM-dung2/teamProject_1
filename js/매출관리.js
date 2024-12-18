document.querySelectorAll("select option")[2].selected = true;

// 셀렉트 박스에 선택된 값을 넘겨주기
function changeSelect(str){
    if(str == "sDay"){ listFunc(); }
    else if(str == "sMonth"){ monthListFunc(); }
    else if(str == "sYear"){ yearListFunc(); }
}

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
    let html = ``;
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
    } // for1 end
    outputFunc(html);
} // f end

// 월별 리스트
function monthListFunc(){
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    let date = new Date();
    let nowYear = date.getFullYear();
    let html = ``;

    for( let year = nowYear ; year >= nowYear-5 ; year-- ){
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
                    // 출력
                    if( sName != ''){ 
                        html += `<tr>
                                    <td>${ sName }</td>
                                    <td>${ year }년</td>
                                    <td>${ month }월</td>
                                    <td>${ pName }</td>
                                    <td>${ count }</td>
                                    <td>${ (price * count).toLocaleString('ko-KR') }</td>
                                    <td class="tableBtn">
                                        <button type="button">수정</button>
                                        <button type="button">삭제</button>
                                    </td>
                                </tr>`;
                        sName = '';
                        pName = '';
                        price = 0;
                        count = 0;
                    } // if end
                } // for end
            } // for end    
        } // for1 end
    } // for end
    outputFunc(html)
}

// 년도별 리스트
function yearListFunc(){
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    let date = new Date();
    let nowYear = date.getFullYear();
    let html = ``;

    for( let year = nowYear ; year >= nowYear-5 ; year-- ){
        let sName = '';
        let pName = '';
        let price = 0;
        let count = 0;
        
        for( let j = 0 ; j < sampleArray.length ; j++ ){
            for( let k = 0 ; k < productArray.length ; k++ ){
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
                // 출력
                if( sName != ''){ 
                    html += `<tr>
                                <td>${ sName }</td>
                                <td></td>
                                <td>${ year }년</td>
                                <td>${ pName }</td>
                                <td>${ count }</td>
                                <td>${ (price * count).toLocaleString('ko-KR') }</td>
                                <td class="tableBtn">
                                    <button type="button">수정</button>
                                    <button type="button">삭제</button>
                                </td>
                            </tr>`;
                    sName = '';
                    pName = '';
                    price = 0;
                    count = 0;
                } // if end
            } // for end
        } // for end    
    } // for end
    outputFunc(html)
} // f end

// 수정 출력
function updateFunc( sno ){
    
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    saleArray.sort(function(a,b) {
        return a.no - b.no || new Date(b.date) - new Date(a.date);
    });
    let html = ``;
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
            html += `<tr>
                        <td>${ sName }</td>
                        <td>
                            <select>
                                <option>구매</option>
                                <option>판매</option>
                                <option>환불</option>
                            </select>
                        </td>
                        <td><input type="date" value="${ info1.date }"/></td>
                        <td>
                            <select>
                                <option>호밀빵</option>
                                <option>든든우유</option>
                                <option>치즈케이크</option>
                                <option>마카롱</option>
                                <option>메론빵</option>
                            </select>
                        </td>
                        <td><input type="text" value="${ info1.count }"/></td>
                        <td>${ (price * info1.count).toLocaleString('ko-KR') }</td>
                        <td class="tableBtn">
                            <button onclick="updateFunc(${ sno })" type="button">완료</button>
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

    // if(!confirm("수정하시겠습니까?")){
    //     return;
    // }
    // for( let i = 0 ; i < saleArray.length ; i++ ){
    //     let info = saleArray[i];
        
    // } // for end
    
    // listFunc();
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
    setSaleList( saleArray );
    listFunc();
}