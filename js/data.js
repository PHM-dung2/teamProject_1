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