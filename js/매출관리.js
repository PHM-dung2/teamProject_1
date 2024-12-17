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
                    <td>${ price * info1.count }</td>
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

    for( let year = 2000 ; year <= nowYear ; year++ ){
        for( let month = 1 ; month <= 12 ; month++ ){
            let sName = '';
            let pName = '';
            let price = 0;
            let count = 0;
            
            for( let j = 1 ; j <= sampleArray.length ; j++ ){
                let sample = sampleArray[j];
                if( sample.no == j ){
                    for( let k = 1 ; k <= productArray.length ; k++ ){
                        let product = productArray[k];
                        if( product.pno = k ){
                            for( let i = 0 ; i < saleArray.length ; i++ ){
                                console.log( price );
                                let sale = saleArray[i];   
                                let date = sale.date.split('-');
                                if( date[0] == year && date[1] == month ){
                                    sName = sample.sName;
                                    pName = product.pName;
                                    if( info1.type == 0 || info1.type == 2 ){ count -= info1.count; }
                                    else if( info1.type == 1 ){ count += info1.count; }
                                    price = product.price;
                                } // if end
                            } // for2 end
                        }
                        // 출력
                        if( sName != ''){ 
                            html += `<tr>
                                        <td>${ sName }</td>
                                        <td>${ year }년</td>
                                        <td>${ month }월</td>
                                        <td>${ pName }</td>
                                        <td>${ count }</td>
                                        <td>${ price * count }</td>
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
                } // if end
            }
        } // for1 end

    } // for end
    outputFunc(html)
}

// 년도별 리스트
function yearListFunc(){
    let html = `년도`;
    outputFunc(html)
}

// for( let j = 0 ; j < sampleArray.length ; j++ ){
//     let info2 = sampleArray[j];
//     if( info1.no == info2.no ) {
//         sName = info2.sName;
//         for( let j = 0 ; j < productArray.length ; j++ ){
//             let info3 = productArray[j];
//             if( info1.pno == info3.pno ){
//                 pName = info3.pName;
//                 if( info1.type == 0 || info1.type == 2 ){ count -= info1.count; }
//                 else if( info1.type == 1 ){ count += info1.count; }
//                 price = info3.price;
//             } // if end
//         } // for4 end
        
//     } // if end
// } // for3 end  
