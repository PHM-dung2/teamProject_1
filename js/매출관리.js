
outputFunc();
function outputFunc(){
    let saleArray = saleList();
    console.log(saleArray);
    listFunc();

} // f end

function listFunc(){
    let saleArray = saleList();
    let sampleArray = sampleList();
    let productArray = productList();
    let tableList = document.querySelector('.tableList')
    let html = ``;
    for( let i = 0 ; i < saleArray.length ; i++){
        let info1 = saleArray[i];
        let sName = '';
        let price = '';
        for( let j = 0 ; j < sampleArray.length ; j++ ){
            let info2 = sampleArray[j];
            if( info1.no == info2.no ) {
                sName = info2.no;
            } // if end
        } // for2 end
        for( let j = 0 ; j < productArray.length ; j++ ){
            let info3 = productArray[j];
            if( info1.pno = info3.pno ){
                price = info3.price;
            } // if end
        } // for 3 end
        html += `<tr>
                    <td>${ sName }</td>
                    <td>${ info1.type }</td>
                    <td>${ info1.date }</td>
                    <td>${ info1.count }</td>
                    <td>${ price }</td>
                    <td class="tableBtn">
                        <button type="button">수정</button>
                        <button type="button">삭제</button>
                    </td>
                </tr>`
    } // for1 end
    tableList.innerHTML = html;

} // f end

