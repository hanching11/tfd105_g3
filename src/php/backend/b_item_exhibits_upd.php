<?php

include("../connect.php");
//---------------------------------------------------
$exhibits = json_decode(file_get_contents("php://input"), true);


//建立SQL
$sql = "
UPDATE exhibits
SET 
    exhibits_name = :upd_name,
    exhibits_room = :upd_room,
    exhibits_author = :upd_author,
    exhibits_info = :upd_info,
    exhibits_status = :upd_status
WHERE exhibits_id = :upd_id

";

//建立SQL
//  $sql = "UPDATE member SET PWD = 'TFD123' WHERE Name = '王小明'";

$statement = $dsn_link->prepare($sql);

// 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
$statement->bindValue(":upd_name", $exhibits["upd_name"]);
$statement->bindValue(":upd_room", $exhibits["upd_room"]);
$statement->bindValue(":upd_author", $exhibits["upd_author"]);
$statement->bindValue(":upd_info", $exhibits["upd_info"]);
$statement->bindValue(":upd_status", $exhibits["upd_status"]);
$statement->bindValue(":upd_id", $exhibits["upd_id"]);

// $statement->bindValue(":exhibits_author", $exhibits["exhibits_author"]);
// $statement->bindValue(":exhibits_info", $exhibits["exhibits_info"]);

// 執行
$statement->execute();
echo json_encode($exhibits);


// $resultCount = $statement->rowCount();
// if ($resultCount > 0) {
//     $respBody["successful"] = true;
//     // $respBody["message"] = "s";
//  } else {
//     $respBody["successful"] = false;
//     // $respBody["message"] = "f";
//  }

?>