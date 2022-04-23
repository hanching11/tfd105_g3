<?php

include("../connect.php");
//---------------------------------------------------
$exhibits = json_decode(file_get_contents("php://input"), true);


//建立SQL
$sql = "SELECT * FROM exhibits where exhibits_id = :id";

$statement = $dsn_link->prepare($sql);

// 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
$statement->bindValue(":id", $exhibits["id"]);
// $statement->bindValue(":exhibits_author", $exhibits["exhibits_author"]);
// $statement->bindValue(":exhibits_info", $exhibits["exhibits_info"]);

// 執行
$statement->execute();

// $resultCount = $statement->rowCount();
// if ($resultCount > 0) {
//     $respBody["successful"] = true;
//     // $respBody["message"] = "s";
//  } else {
//     $respBody["successful"] = false;
//     // $respBody["message"] = "f";
//  }


//抓出全部且依照順序封裝成一個二維陣列
// $data = $statement->fetchAll();

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);

?>