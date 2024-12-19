// 매출관리배열 불러오기 함수
function saleList(){

    let saleList = localStorage.getItem('saleList');
    if( saleList == null ){
        saleList = [
            { sno : 1 , type : 0 , date : "2024-12-16" , count : 3 , pno : 1 , no : 1 },
            { sno : 2 , type : 1 , date : "2024-12-15" , count : 2 , pno : 1 , no : 1 },
            { sno : 3 , type : 0 , date : "2024-12-14" , count : 5 , pno : 2 , no : 2 },
            { sno : 4 , type : 1 , date : "2024-12-15" , count : 3 , pno : 2 , no : 2 },
            { sno : 5 , type : 0 , date : "2024-12-14" , count : 10 , pno : 3 , no : 3 }
        ];
    }else{
        saleList = JSON.parse( saleList );
    }
    return saleList;
    
} // f end

// 매출관리배열 저장 함수
function setSaleList( saleList ){
    localStorage.setItem('saleList', JSON.stringify( saleList ) );
} // f end

// 제품번호 샘플
function productList(){

    let productList = localStorage.getItem('productList');
    if( productList == null ){
        productList = [
            { pno : 1 , pName : "호밀빵" , price : 1000 },
            { pno : 2 , pName : "든든우유" , price : 2000 },
            { pno : 3 , pName : "치즈케이크`" , price : 3000 }
        ];
    }else{
        productList = JSON.parse( productList );
    }
    return productList;
    
} // f end

// 관리자정보 리스트
function sampleList(){
    let sampleList = localStorage.getItem('sampleList');
    if( sampleList == null ){
        sampleList = [
            { no : 1, name : "김도하", sName : "부평점" , address : "인천시 부평구" ,businessNum : 12341234 },
            { no : 2, name : "김레하", sName : "백운점" , address : "인천시 부평구" ,businessNum : 12341234 },
            { no : 3, name : "김미하", sName : "동암점" , address : "인천시 부평구" ,businessNum : 12341234 }
        ];
    }else{
        sampleList =JSON.parse(sampleList)
    }
    return sampleList;
}

// 관리자 로그인 정보 리스트
function sampleAminList(){
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
