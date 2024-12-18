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
                        <button type="button">수정</button>
                        <button type="button">삭제</button>
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
            
            for( let j = 0 ; j < sampleArray.length ; j++ ){
                for( let k = 0 ; k < productArray.length ; k++ ){
                    for( let i = 0 ; i < saleArray.length ; i++ ){
                        let sale = saleArray[i];
                        let day = sale.date.split(`-`);
                        let sample = sampleArray[j];
                        let product = productArray[k];
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

