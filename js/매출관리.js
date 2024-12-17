
outputFunc();
function outputFunc(){
    let saleArray = saleList();
    console.log(saleArray);
    listFunc();

} // f end

function listFunc(){
    let saleArray = saleList();
    let sampleArray = sampleList();
    let tableList = document.querySelector('.tableList')
    let html = ``;
    for( let i = 0 ; i < saleArray.length ; i++){
        let info1 = saleArray[i];
        let info2 = sampleArray[i];
        let sName = '';
        if( info1.no == info2.no ) {
            sName = info2.no
        }   
        html += `<tr>
                    <td>${ sName }</td>
                    <td>${ info1.type }</td>
                    <td>${ info1.date }</td>
                    <td>${ info1.count }</td>
                    <td></td>
                    <td class="tableBtn">
                        <button type="button">수정</button>
                        <button type="button">삭제</button>
                    </td>
                </tr>`
    }
    tableList.innerHTML = html;

} // f end

