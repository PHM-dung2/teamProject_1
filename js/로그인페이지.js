/* function sampleAminList(){
    let sampleAminList = localStorage.getItem('sampleAminList')
    if( sampleAminList == null){
        sampleAdminList = [
            { ano : 1 , name : '송제영', id : 'admin-01@google.com', pw : '1111'},
            { ano : 2 , name : '박희만', id : 'admin-02@google.com', pw : '2222'},
            { ano : 3 , name : '김도하', id : 'admin-03@google.com', pw : '3333'},
            { ano : 4 , name : '유재석', id : 'admin-04@google.com', pw : '4444'},
            { ano : 5 , name : '강호동', id : 'admin-05@google.com', pw : '5555'},
        ];
    }else{sampleAminList = JSON.parse(sampleAminList);        
        }
        return sampleAminList;
}
*/

// 로그인 아닐시 이동 제한
limitLocation();
function limitLocation(){
    let ano = localStorage.getItem( 'loginAno' );
    if( ano == '' || ano == null ){
        html = `<ul>
                    <li id="title" >메뉴</li>
                    <li><a href="관리자등록/관리자등록.html">관리자등록</a></li>
                    <li><a onclick="limitAlert()">가맹관리</a></li>
                    <li><a onclick="limitAlert()">매출관리</a></li>
                </ul>`
        document.querySelector('#menu').innerHTML = html;
    }

}

function limitAlert(){
    alert("로그인 후 이용해 주세요.")
}

function registUser(){
    
    // 1. 로그인창에서 입력받은 아이디와 비밀번호 
    let userId = document.querySelector('.userIdInput').value;
    let userPassword = document.querySelector('.userPwInput').value;

    // 2. 기존의 관리자정보를 가져오기 
    let adminList = sampleAdminList();

    // 3. 입력받은 정보와 기존의 관리자정보리스트 
    for( let index = 0 ; index <= adminList.length-1 ; index++ ){
        let user = adminList[index];
        if(user.id == userId && user.pw == userPassword){
            alert("로그인 완료");
            let loginAno = user.ano;
            localStorage.setItem('loginAno',loginAno)
            //// +로그아웃 
            // localStorage.removeItem('loginAno');
            location.href="./가맹관리/가맹관리.html"; // JS에서 제공하는 페이지 이동 함수. location.href="이동하고싶은HTML파일경로"

            return;
        }
    }
    alert('일치한 관리자 정보가 없습니다.');
}