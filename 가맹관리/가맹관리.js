
/*let sampleArr =[
    {no : 1, name : "김도하", address : "인천시 부평구" ,businessNum : 12341234},
    {no : 2, name : "김레하", address : "인천시 부평구" ,businessNum : 12341234},
    {no : 3, name : "김미하", address : "인천시 부평구" ,businessNum : 12341234}
];
let sno = 4;
*/


function inFunc(){
    let name = document.querySelector('.name').value;
    let address = document.querySelector('.address').value;
    let businessNum = document.querySelector('.businessNum').value;

    let sampleList = sampleList();
    console.log(sampleList);

    let no = sampleList.length != 0 ? sampleList[sampleList.length -1].no  + 1 : 1;

    let sample ={
        no : no,
        name : name,
        address :address,
        businessNum : businessNum
    };
    // sno++;

    sampleList.push(sample);
    console.log(sampleList);

    setSample.push(sampleList);
    
    alert('가맹정보 등록 성공');

    document.querySelector('.name').value = ``;
    document.querySelector('.address').value = ``;
    document.querySelector('.businessNum').value = ``;

    outFunc();
    return;
};

outFunc();
function outFunc(){

    let sampleList = sampleList();

    let tbody = document.querySelector('table > tbody');
    let html = ``;

    for(let i = 0; i < sampleList.length ; i++){
        let info = sampleList[i];

        html += `
                    <tr>
                        <td >${info.no}</td>
                        <td>${info.name}</td>
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
    for(let j = 0 ; j < sampleList.length ; j++){
        if(sampleList[j].no == i){
            sampleList.splice(j, 1);
        }
    }

    return outFunc();    
}


// table수정 클릭 시
function changeOutFunc(i){
    console.log(i);
    let title = document.querySelector('#change');
    let html =``;
    for(let j = 0 ; j < sampleList.length ; j++){
        let info = sampleList[j]
        if(sampleList[j].no == i){

            html += `<h3>${info.name} ${info.address} ${info.businessNum} 님의 정보 수정</h3>
                    <input class="chName" type="text" placeholder="점주명"/>
                    <input class="chBusinessNum" type="text" placeholder="사업자 번호"/>
                    <br/>
                    <input type="text" id="sample6_postcode2" placeholder="우편번호">
                    <input class="inBtn" style="width: 150px;" type="button" onclick="sample6_execDaumPostcode2()" value="우편번호 찾기"><br>
                    <input class="chAddress" type="text" id="sample6_address2" placeholder="주소">
                    <input type="text" id="sample6_detailAddress2" placeholder="상세주소">
                    
                    <button onclick="changeFunc(${info.no})" class="changeBtn" type="button">가맹수정</button>`;
        }
    }

    title.innerHTML = html;
    document.querySelector('#change') = ``;
    return;

}

// 가맹정보 수정 함수
function changeFunc(i){
    let changeN = document.querySelector('.chName').value;
    let changeA = document.querySelector('.chAddress').value;
    let changeB = document.querySelector('.chBusinessNum').value;

    for(let j = 0 ; j < sampleList.length ; j++){
        let info = sampleList[j]
        if(sampleList[j].no == i){
            
            info.name = changeN;
            console.log(info.name);
            info.address = changeA;        
            info.businessNum = changeB;
            
        }
    }
    outFunc();
}
// changeFunc undefined 해결하기
// 시간있으면 -> table 스크롤바 만들기
// 시간있으면 -> 수정정보입력시 input의 value가 null 이면 현재 정보 그대로 table에 출력하기


// 메뉴 li에 각 페이지 링크 연결하기

// 