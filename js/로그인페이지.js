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

function registUser(){
    
    // 1. 로그인창에서 입력받은 아이디와 비밀번호 
    let userId = document.querySelector('.userIdInput').value;
    let userPassword = document.querySelector('.userPwInput').value;

    // 2. 기존의 관리자정보를 가져오기 
    let adminList = sampleAdminList();

    // 3. 입력받은 정보와 기존의 관리자정보리스트 
    let name;
    for( let index = 0 ; index <= adminList.length-1 ; index++ ){
        let user = adminList[index];
        if(user.id == userId && user.pw == userPassword){
            alert("로그인 완료");
            let loginAno = user.ano;
            name = user.name;
            localStorage.setItem('loginAno',loginAno)
            //// +로그아웃 
            // localStorage.removeItem('loginAno');
            location.href="./가맹관리/가맹관리.html"; // JS에서 제공하는 페이지 이동 함수. location.href="이동하고싶은HTML파일경로"

            return;
        }
    }
    alert('일치한 관리자 정보가 없습니다.');
}