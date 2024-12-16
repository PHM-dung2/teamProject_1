function saleList(){
    let saleList = localStorage.getItem('saleList');
    if( saleList = null ){
        saleList = [
            { sno : 1 , type : 0 , date : 2024-12-16 , count : 3 , pno : 1 , no : 1 },
            { sno : 2 , type : 1 , date : 2024-12-15 , count : 2 , pno : 1 , no : 1 },
            { sno : 3 , type : 0 , date : 2024-12-14 , count : 5 , pno : 2 , no : 2 },
            { sno : 4 , type : 1 , date : 2024-12-15 , count : 3 , pno : 2 , no : 2 },
            { sno : 5 , type : 0 , date : 2024-12-14 , count : 10 , pno : 3 , no : 3 }
        ];
    }else{
        saleList = JSON.parse( saleList );
    }
    return saleList;
    
} // f end

function sampleList(){
    let sampleList = localStorage.getItem('sampleArr');
    if(sampleList = null){
        sampleList =[
            {no : 1, name : "김도하", address : "인천시 부평구" ,businessNum : 12341234},
            {no : 2, name : "김레하", address : "인천시 부평구" ,businessNum : 12341234},
            {no : 3, name : "김미하", address : "인천시 부평구" ,businessNum : 12341234}
        ];
    }else{
        sampleList =JSON.parse(sampleList)
    }
    return sampleList;
}