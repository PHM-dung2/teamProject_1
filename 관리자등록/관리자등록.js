// 1. 초기 관리자 데이터 설정 : 기존 관리자 정보를 로컬스토리지에 저장
if (!localStorage.getItem('adminLists')) {
  // 만약 localStorage 에 adminLists 데이터가 없으면 초기 데이터 저장!

  const adminLists = [
    {
      id: 1,
      email: 'admin-01@gmail.com',
      password: '1234',
      rank: '과장',
      name: '송제영',
    },
    {
      id: 2,
      email: 'admin-02@gmail.com',
      password: '1234',
      rank: '팀장',
      name: '박희만',
    },
    {
      id: 3,
      email: 'admin-03@gmail.com',
      password: '1234',
      rank: '회장',
      name: '김도하',
    },
    {
      id: 4,
      email: 'admin-04@gmail.com',
      password: '1234',
      rank: '부장',
      name: '최홍빈',
    },
  ];

  // 로컬스토리지에 초기 데이터 저장 : 로컬스토리지는 문자열만 저장할 수 있으므로, 객체를 JSON 문자열로 변환
  localStorage.setItem('adminLists', JSON.stringify(adminLists));

  // 로컬스토리지 초기화 : localStorage.clear();
  // 로컬스토리지 특정 데이터만 삭제 : localStorage.removeItem('키이름')
  // 로컬스토리지 초기화 / 삭제 후 확인 : console.log(localStorage);
}

// 1-2 확인을 위해 로컬스토리지 데이터(관리자 목록)를 전역변수로 지정 하고 데이터가 없으면 빈 배열로 만듬
const adminLists = JSON.parse(localStorage.getItem('adminLists')) || [];
// 로컬스토리지 데이터를 표형태로 콘솔에 출력
console.table(adminLists);

// 2. 관리자 등록함수
function createAdmin() {
  // 2-1 관리자 등록 페이지 인풋에서 사용자 입력값 가져오기
  const email = document.querySelector('.adminIdInput').value;
  const password = document.querySelector('.adminPwInput').value;
  const rank = document.querySelector('.adminRkInput').value;
  const name = document.querySelector('.adminNaInput').value;

  // 2-2 관리자 입력값 검증 : email, password, rank, name 중 하나라도 비어 있으면 코드 실행
  if (!email || !password || !rank || !name) {
    alert('모든 입력값을 채워주세요!');
    return;
  }

  // 2-3 중복 이메일 확인 : some() 메서드는 adminLists 배열을 처음부터 끝까지 순회하면서, 각 admin 객체의 email 속성과 새로 입력한 email을 비교 admin은 adminLists 배열의 각 요소를 하나씩 가리키는 변수
  const duplicateEmail = adminLists.some((admin) => admin.email === email);
  if (duplicateEmail) {
    alert('이미 관리자로 등록된 이메일 입니다.');
    return;
  }

  // 2-4 새로운 관리자 객체(데이터) 추가
  const newAdmin = {
    id: adminLists.length + 1,
    email,
    password,
    rank,
    name,
  };
  adminLists.push(newAdmin); // push() 메서드를 사용하여 newAdmin을 adminLists 배열의 끝에 추가

  // 2-5 로컬스토리지에 업데이트 : 관리자를 추가하거나 수정한 후, 변경된 데이터를 로컬스토리지에 반영
  localStorage.setItem('adminLists', JSON.stringify(adminLists));
  alert('새로운 관리자가 등록되었습니다.');

  // 2-6 관리자 등록 페이지 입력값 초기화
  document.querySelector('.adminIdInput').value = '';
  document.querySelector('.adminPwInput').value = '';
  document.querySelector('.adminRkInput').value = '';
  document.querySelector('.adminNaInput').value = '';
}

// 3. 등록 버튼 클릭시 관리자 추가 : 이벤트리스너(여러개 리스너를 요소에 추가가능) / 온클릭(하나의 리스너만 등록가능)
document.querySelector('.adminBtn').addEventListener('click', createAdmin);
