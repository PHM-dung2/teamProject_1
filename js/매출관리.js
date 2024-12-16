
outputFunc();
function outputFunc(){
    let saleArray = saleList();
    console.log(saleArray);
    listFunc();

} // f end

function listFunc(){
    let saleArray = saleList();
    let tableList = document.querySelector(".tableList")
    let html = ``;
    for( let i = 0 ; i < saleArray.length ; i++){
        let info = saleArray[i];
        html += `<tr>
                    <td></td>
                    <td>${ info.type }</td>
                    <td>${ info.date }</td>
                    <td>${ info.count }</td>
                    <td></td>
                    <td class="tableBtn">
                        <button type="button">수정</button>
                        <button type="button">삭제</button>
                    </td>
                </tr>`
    }
    tableList.innerHTML = html;

} // f end

