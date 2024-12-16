let sampleArr =[
    {no : 1, name : "김도하", adress : "인천시 부평구" ,businessNum : 12341234},
    {no : 2, name : "김도하", adress : "인천시 부평구" ,businessNum : 12341234},
    {no : 3, name : "김도하", adress : "인천시 부평구" ,businessNum : 12341234}
];
let sno = 4;

function inFunc(){
    let name = document.querySelector('.name').value;
    let adress = document.querySelector('.adress').value;
    let businessNum = document.querySelector('.businessNum').value;

    let sample ={
        no : sno,
        name : name,
        adress :adress,
        businessNum : businessNum
    };
    sno++;

    sampleArr.push(sample);
    console.log(sampleArr);

    document.querySelector('.name').value = ``;
    document.querySelector('.adress').value = ``;
    document.querySelector('.businessNum').value = ``;

    outFunc();
    return;
};

outFunc();
function outFunc(){
    let tbody = document.querySelector('table > tbody');
    let html = ``;

    for(let i = 0; i < sampleArr.length ; i++){
        let info = sampleArr[i];

        html += `
                    <tr>
                        <td >${info.no}</td>
                        <td>${info.name}</td>
                        <td>${info.adress}</td>
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
    for(let j = 0 ; j < sampleArr.length ; j++){
        if(sampleArr[j].no == i){
            sampleArr.splice(j, 1);
        }
    }

    return outFunc();    
}


// table수정 클릭 시
function changeOutFunc(i){
    console.log(i);
    let title = document.querySelector('#change');
    let html =``;
    for(let j = 0 ; j < sampleArr.length ; j++){
        let info = sampleArr[j]
        if(sampleArr[j].no == i){

            html += `<h3>${info.name} ${info.adress} ${info.businessNum} 님의 정보 수정</h3>
                        <input class="chName" type="text" placeholder="점주명"/>
                        <br/>
                        <input class="chAdress" type="text" placeholder="지점 주소"/>
                        <br/>
                        <input class="chBusinessNum" type="text" placeholder="사업자 번호"/>
                        <button onclick="changeFunc(${info.no})" class="changeBtn" type="button">가맹수정</button>`;
        }
    }

    title.innerHTML = html;

    return;

}

// 가맹정보 수정 함수
function changeFunc(i){
    let changeN = document.querySelector('.chName').value;
    let changeA = document.querySelector('.chAdress').value;
    let changeB = document.querySelector('.chBusinessNum').value;

    for(let j = 0 ; j < sampleArr.length ; j++){
        let info = sampleArr[j]
        if(sampleArr[j].no == i){
            
            info.name = changeN;
            console.log(info.name);
            info.adress = changeA;        
            info.businessNum = changeB;
        }
    }
    outFunc();
}
// changeFunc undefined 해결하기
// 시간있으면 -> table 스크롤바 만들기
// 시간있으면 -> 수정정보입력시 input의 value가 null 이면 현재 정보 그대로 table에 출력하기


// 메뉴 li에 각 페이지 링크 연결하기
