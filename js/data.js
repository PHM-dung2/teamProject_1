//// 매출관리 data
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



//// 가맹관리 data
// 관리자정보 리스트
function sampleList(){
    let sampleArr = localStorage.getItem('sampleArr');
    if( sampleArr == null ){
        sampleArr = [
            { no : 1, name : "김도하", sName : "부평점" , address : "인천시 부평구" ,businessNum : 12341234 },
            { no : 2, name : "김레하", sName : "백운점" , address : "인천시 부평구" ,businessNum : 12341234 },
            { no : 3, name : "김미하", sName : "동암점" , address : "인천시 부평구" ,businessNum : 12341234 }
        ];
    }else{
        sampleArr = JSON.parse(sampleArr)
    }
    return sampleArr;
}


function setSample(sampleArr){
    localStorage.setItem('sampleArr', JSON.stringify(sampleArr))
}