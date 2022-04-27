<?php

include("./connect.php");
//---------------------------------------------------
$exhibits = json_decode(file_get_contents("php://input"), true);


//建立SQL
$sql = "
SELECT * FROM exhibits
WHERE exhibits_status = '上架'
and exhibits_room = :exhibits_room
LIMIT 8
";

$statement = $dsn_link->prepare($sql);
$statement->bindValue(":exhibits_room", $exhibits["exhibits_room"]);


// 執行
$statement->execute();


//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
