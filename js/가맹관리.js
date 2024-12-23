logInFunc( )

/*let sampleArr =[
    {no : 1, name : "김도하", address : "인천시 부평구" ,businessNum : 12341234},
    {no : 2, name : "김레하", address : "인천시 부평구" ,businessNum : 12341234},
    {no : 3, name : "김미하", address : "인천시 부평구" ,businessNum : 12341234}
];
let sno = 4;
*/
page = 0; 
currentPage = 1;
let listType = '';
inputPrint()
function inFunc(){
    let name = document.querySelector('.name').value;
    let sName = document.querySelector('.sName').value;
    let address = document.querySelector('.address').value;
    let businessNum = document.querySelector('.businessNum').value;

    // 유효성검사
    if( !name ){ alert("점주명을 입력해주세요."); return;}
    if( !sName ){ alert("지점명을 입력해주세요."); return;}
    if( !businessNum ){ alert("사업자번호를 입력해주세요."); return;}
    if( !address ){ alert("주소를 입력해주세요."); return;}

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

    setSampleList(sampleArr);
    
    alert('새로운 가맹 정보가 등록되었습니다.');

    document.querySelector('.name').value = ``;
    document.querySelector('.sName').value = ``;
    document.querySelector('.address').value = ``;
    document.querySelector('#sample6_postcode').value = '';
    document.querySelector('.businessNum').value = ``;
    document.querySelector('#sample6_detailAddress').value = '';

    outFunc();
    return;
};

outFunc();
function outFunc(){
    let sampleArr = sampleList();
    console.log( sampleArr )
    totalCount = sampleArr.length;
    pagingFunc( );
    printList( sampleArr );
    let printArray = JSON.parse( localStorage.getItem( 'printList'));
    while ( printArray.length < 10 ) {
        let board = {
            "no": "",
            "name": "",
            "sName": "",
            "address": "",
            "businessNum": ""
        }
        printArray.push( board );
    }

    let tbody = document.querySelector('table > tbody');
    let html = ``;


    for(let i = 0; i < printArray.length ; i++){
        let info = printArray[i];

        html += `
                    <tr>
                        <td style="width: 80px;">${info.no}</td>
                        <td style="width: 100px;">${info.name}</td>
                        <td style="width: 130px;">${info.sName}</td>
                        <td style="width: 360px;">${info.address}</td>
                        <td style="width: 130px;">${info.businessNum}</td>
                        <td style="width: 183px;">
                            ${ info.no == "" || info.name == "" || info.sName == "" || info.address == "" || info.businessNum == "" ? "" : 
                            `<button onclick="changeOutFunc(${info.no})" class="btn" type="button">수정</button>
                            <button onclick="deleteFunc(${info.no})" class="btn" type="button">삭제</button>` }
                        </td>
                    </tr>
                ` 
    };

    tbody.innerHTML = html;

    return;
}


function deleteFunc(i){
    // Y/N 유효성검사
    if(!confirm("삭제하시겠습니까?")){
        return;
    }

    let sampleArr = sampleList();

    for(let j = 0; j < sampleArr.length ; j++){
        let info = sampleArr[j];
        if(info.no == i){
            sampleArr.splice(j, 1);
            break;
        }
    }
    if(sampleArr.length % 10 == 0){ currentPage-- }
    setSampleList(sampleArr);
    outFunc();    
}


// table수정 클릭 시
function changeOutFunc(i){
    console.log(i);

    let sampleArr = sampleList();
    console.log(sampleArr);
    let title = document.querySelector('#input');
    let html =``;
    for(let j = 0 ; j < sampleArr.length ; j++){
        let info = sampleArr[j]
        if(sampleArr[j].no == i){
// input 사이즈 조절

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
            html += `<h3>${info.name} ${info.sName} ${info.address} ${info.businessNum} 님의 정보 수정</h3>
                    <input class="chName" style="width: 320px; type="text" value="${info.name}"/>
                    <input class="chSName" style="width: 320px;" type="text" value="${info.sName}"/>
                    <input class="chBusinessNum" style="width: 320px; type="text" value="${info.businessNum}"/>
                    <input type="text" id="sample6_postcode2" placeholder="우편번호">
                    <input class="inBtn" style="width: 150px;" type="button" onclick="sample6_execDaumPostcode2()" value="우편번호 찾기">
                    <input class="chAddress" type="text" id="sample6_address2" value="${info.address}">
                    <input type="text" id="sample6_detailAddress2" placeholder="상세주소">
                    <button onclick="changeFunc(${info.no})" class="changeBtn" type="button">가맹수정</button>`;
        }
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    title.innerHTML = html;

}

// 가맹정보 수정 함수
function changeFunc(i){
    // Y/N 유효성검사
    if(!confirm("수정하시겠습니까?")){
        return;
    }
    let sampleArr = sampleList();

    let changeN = document.querySelector('.chName').value;
    let changeS = document.querySelector('.chSName').value;
    let changeA = document.querySelector('.chAddress').value;
    let changeB = document.querySelector('.chBusinessNum').value;

    if( !changeN || !changeS || !changeA || !changeB ){
        alert( "수정할 내용을 입력해주세요." );
        return;
    }


    for(let j = 0 ; j < sampleArr.length ; j++){
        let info = sampleArr[j]
        if(sampleArr[j].no == i){
            
            info.name = changeN;
            info.sName = changeS;
            info.address = changeA;        
            info.businessNum = changeB;
            
        }
    }
    setSampleList(sampleArr);
    alert("가맹정보가 수정되었습니다.");
    inputPrint()
    outFunc();

    document.querySelector('.chName').value = '';
    document.querySelector('.chSName').value = '';
    document.querySelector('.chBusinessNum').value = '';
    document.querySelector('#sample6_postcode2').value = '';
    document.querySelector('.chAddress').value = '';
    document.querySelector('#sample6_detailAddress2').value = '';
}
// 삭제 수정 로컬 연결-> 저장된 객체 삭제 수정// 삭제 수정 로컬 연결-> 저장된 객체 삭제 수정 v
// changeFunc undefined 해결하기 v 
// 시간있으면 -> table 스크롤바 만들기 v
// 시간있으면 -> 수정정보입력시 input의 value가 null 이면 현재 정보 그대로 table에 출력하기


// 메뉴 li에 각 페이지 링크 연결하기

// 등록 html 출력
function inputPrint(){
    html = `<h3></h3>
            <input class="name" style="width: 322px;" type="text" placeholder="점주명"/>
            <input class="sName" style="width: 322px;" type="text" placeholder="지점명"/>
            <input class="businessNum" style="width: 322px;" type="text" placeholder="사업자번호"/>
            <input type="text" id="sample6_postcode" placeholder="우편번호">
            <input class="inBtn" style="width: 150px;" type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기">
            <input class="address" type="text" id="sample6_address" placeholder="주소">
            <input type="text" id="sample6_detailAddress" placeholder="상세주소">
            <button onclick="inFunc()" class="inBtn" type="button">가맹등록</button>`;
    document.querySelector('#input').innerHTML = html;
}