
<?php

include("./connect.php");
//---------------------------------------------------
$member = json_decode(file_get_contents("php://input"), true);


//建立SQL
$sql  = "SELECT * FROM member";
// $sql = "insert into mydb.member(member_id,account,name,birthday,phone,member_status)
// values (:member_id,:account,:name,:birthday,:phone,0);";

$statement = $dsn_link->prepare($sql);



// 執行
$statement->execute();


//抓出全部且依照順序封裝成一個二維陣列
// $data = $statement->fetchAll();

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);