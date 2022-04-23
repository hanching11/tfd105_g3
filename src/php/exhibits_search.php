<?php

include("./connect.php");
//---------------------------------------------------
$exhibits = json_decode(file_get_contents("php://input"), true);


//建立SQL
$sql = "SELECT * FROM exhibits 
WHERE exhibits_room LIKE ?
";

$statement = $dsn_link->prepare($sql);

// 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
$statement->bindValue(1, '%' . $exhibits['KEY'] . '%');  //第二個參數 變數 值都可以
// $statement->bindValue(":exhibits_author", $exhibits["exhibits_author"]);
// $statement->bindValue(":exhibits_info", $exhibits["exhibits_info"]);

// 執行
$statement->execute();

//抓出全部且依照順序封裝成一個二維陣列
// $data = $statement->fetchAll();

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

if (count($data) > 0) {
    echo json_encode($data);
};
