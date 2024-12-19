
/*let sampleArr =[
    {no : 1, name : "김도하", address : "인천시 부평구" ,businessNum : 12341234},
    {no : 2, name : "김레하", address : "인천시 부평구" ,businessNum : 12341234},
    {no : 3, name : "김미하", address : "인천시 부평구" ,businessNum : 12341234}
];
let sno = 4;
*/


function inFunc(){
    let name = document.querySelector('.name').value;
    let sName = document.querySelector('.sName').value;
    let address = document.querySelector('.address').value;
    let businessNum = document.querySelector('.businessNum').value;

    let sampleArr = sampleList();
    console.log(sampleList);

    let no = sampleArr.length != 0 ? sampleArr[sampleArr.length -1].no  + 1 : 1;
    console.log(no);

    let sample ={
        no : no,
        name : name,
        sName : sName,
        address :address,
        businessNum : businessNum
    };
    // sno++;

    sampleArr.push(sample);
    console.log(sampleArr);

    setSample(sampleArr);
    
    alert('새로운 가맹 정보가 등록되었습니다.');

    document.querySelector('.name').value = ``;
    document.querySelector('.sName').value = ``;
    document.querySelector('.address').value = ``;
    document.querySelector('.businessNum').value = ``;

    outFunc();
    return;
};

outFunc();
function outFunc(){

    let sampleArr = sampleList();

    let tbody = document.querySelector('table > tbody');
    let html = ``;

    for(let i = 0; i < sampleArr.length ; i++){
        let info = sampleArr[i];

        html += `
                    <tr>
                        <td >${info.no}</td>
                        <td>${info.name}</td>
                        <td>${info.sName}</td>
                        <td>${info.address}</td>
                        <td>${info.businessNum}</td>
                        <td>
                            <button onclick="changeOutFunc(${info.no})" class="btn" type="button">수정</button>
                            <button onclick="deleteFunc(${info.no})" class="btn" type="button">삭제</button>
                        </td>
                    </tr>
                ` 
    };

    tbody.innerHTML = html;

    return;
}

function deleteFunc(i){
    let sampleArr = sampleList();

    for(let j = 0; j < sampleArr.length ; j++){
        let info = sampleArr[j];
        if(info.no == i){
            sampleArr.splice(j, 1);
            break;
        }
    }
    setSample(sampleArr);
    alert("가맹정보가 삭제되었습니다.")
    return outFunc();    
}


// table수정 클릭 시
function changeOutFunc(i){
    console.log(i);

    let sampleArr = sampleList();
    console.log(sampleArr);
    let title = document.querySelector('#change');
    let html =``;
    for(let j = 0 ; j < sampleArr.length ; j++){
        let info = sampleArr[j]
        if(sampleArr[j].no == i){
// input 사이즈 조절
            html += `<h3>${info.name} ${info.sName} ${info.address} ${info.businessNum} 님의 정보 수정</h3>
                    <input class="chName" style="width: 295px; type="text" placeholder="점주명"/>
                    <input class="chSName" style="width: 295px;" type="text" placeholder="지점명"/>
                    <input class="chBusinessNum" style="width: 295px; type="text" placeholder="사업자 번호"/>
                    <br/>
                    <input type="text" id="sample6_postcode2" placeholder="우편번호">
                    <input class="inBtn" style="width: 150px;" type="button" onclick="sample6_execDaumPostcode2()" value="우편번호 찾기"><br>
                    <input class="chAddress" type="text" id="sample6_address2" placeholder="주소">
                    <input type="text" id="sample6_detailAddress2" placeholder="상세주소">
                    
                    <button onclick="changeFunc(${info.no})" class="changeBtn" type="button">가맹수정</button>`;
        }
    }

    title.innerHTML = html;

}

// 가맹정보 수정 함수
function changeFunc(i){
    let sampleArr = sampleList();

    let changeN = document.querySelector('.chName').value;
    let changeS = document.querySelector('.chSName').value;
    let changeA = document.querySelector('.chAddress').value;
    let changeB = document.querySelector('.chBusinessNum').value;


    for(let j = 0 ; j < sampleArr.length ; j++){
        let info = sampleArr[j]
        if(sampleArr[j].no == i){
            
            info.name = changeN;
            info.sName = changeS;
            info.address = changeA;        
            info.businessNum = changeB;
            
        }
    }
    setSample(sampleArr);
    alert("가맹정보가 수정되었습니다.");

    outFunc();
}
// 삭제 수정 로컬 연결-> 저장된 객체 삭제 수정// 삭제 수정 로컬 연결-> 저장된 객체 삭제 수정 v
// changeFunc undefined 해결하기 v 
// 시간있으면 -> table 스크롤바 만들기 v
// 시간있으면 -> 수정정보입력시 input의 value가 null 이면 현재 정보 그대로 table에 출력하기


// 메뉴 li에 각 페이지 링크 연결하기