<?php

// $input_account = $_POST["MID"];
// //$input_account = 1;

// // ========= 取得與資料庫連線 ========== //
// include("../connect.php");


// //============================= 引入資料 =====================================//

// $sql = "SELECT *,date(CREATE_DATE) as cdate, date(BOOKING_DATE) as bdate FROM RESTAURANT_ORDER WHERE (`FK_MEMBER_ID` = ?);";
    
//     //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
//     $statement = $pdo->prepare($sql);    
//     $statement->bindValue(1, $input_account);

//     $statement->execute();
    
//     //抓出全部且依照順序封裝成一個二維陣列
//     $data = $statement->fetchAll(PDO::FETCH_ASSOC); 

//     //print_r($data);
//     echo  json_encode($data);  
?>