<?php
include("../connect.php");
//---------------------------------------------------
$exhibits = json_decode(file_get_contents("php://input"), true);

//建立SQL
$sql = "insert into exhibits(exhibits_name,exhibits_room,exhibits_author,exhibits_info,exhibits_img2,exhibits_status)
values (:E_name,:E_room,:E_author,:E_info,:E_img,:E_status);";

// // 包裝起來才可以使PHP 用bindValue
$statement = $dsn_link->prepare($sql);

// // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
$statement->bindValue(":E_name", $exhibits["E_name"]);
$statement->bindValue(":E_room", $exhibits["E_room"]);
$statement->bindValue(":E_author", $exhibits["E_author"]);
$statement->bindValue(":E_info", $exhibits["E_info"]);
$statement->bindValue(":E_img", $exhibits["E_img"]);
$statement->bindValue(":E_status", $exhibits["E_status"]);

// //執行
$statement->execute();
// echo json_encode(['status' => 'SUCCESS']);
// echo "新增成功!";
// print_r($exhibits);

// echo "文字" 跟 print_r($exhibits) 的差異
// 兩個都是打印出結果
// echo 無法打印出陣列，他只會顯示array，
// print_r 可以打印出陣列裡面的內容
?>