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
            { pno : 3 , pName : "치즈케이크" , price : 3000 },
            { pno : 4 , pName : "마카롱" , price : 3500 },
            { pno : 5 , pName : "메론빵" , price : 4500 }
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

// 페이징 함수
function pagingFunc( value ){
    let totalPage = Math.ceil(totalCount / limit)

    let saleArray = saleList();
    let totalCount = saleArray.length;
    const limit = 10;

    let html = '';
    for( let i = 1 ; i <= totalPage ; i++ ){
        
    }
}

function nextPageFunc(){
    
}