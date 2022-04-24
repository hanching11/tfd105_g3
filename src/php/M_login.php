<?php

include("./connect.php");

//---------------------------------------------------
$member = json_decode(file_get_contents("php://input"), true);
// echo json_encode($member);

//建立SQL
$sql = "SELECT * FROM member where account= :account and password = :password ";



$statement = $dsn_link->prepare($sql);

$statement->bindValue(":account", $member["login_account"]);
$statement->bindValue(":password", $member["login_password"]);

// 執行
$statement->execute();

$resultCount = $statement->rowCount();

if ($resultCount > 0) {
    session_start();
    $_SESSION['member'] = $statement->fetch();
   //  $_SESSION['member'] = $member["member"];
   $_SESSION["successful"] = true;
   // $respBody["message"] = "s";
} else {
   $_SESSION["successful"] = false;
   // $respBody["message"] = "f";
}


echo json_encode($_SESSION);

// // 實作中 不會讓使用者看到所有資料，而資料庫有PK，不會有重複，可以找資料>0筆
// if (count($resultCount) > 0) {
//    // 啟用Session  Session是在伺服器端建立，預設存在時間是30分鐘
//    session_start();
//    // 當同個瀏覽器有舊的PHPSESSID，就更新PHPSESSID等資料
//    if ($_SESSION != null) {
//       session_regenerate_id();
//    }
//    $_SESSION['account'] = $resultCount[0]["account"];
//    $_SESSION['NAME'] = $resultCount[0]["NAME"];
//    $_SESSION['member'] = (array) $resultCount;
//    $_SESSION['successful'] = true;
//    $_SESSION['message'] = '登入成功，歡迎回來';
//    echo json_encode($_SESSION);
// } else {
//    $_SESSION['account'] = "";
//    $_SESSION['NAME'] = "";
//    $_SESSION['member'] = "";
//    $_SESSION['successful'] = false;
//    $_SESSION['message'] = "帳號或密碼錯誤！";
//    echo json_encode($_SESSION);
// }