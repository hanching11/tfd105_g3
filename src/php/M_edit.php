<?php

include("./connect.php");
//---------------------------------------------------
$member = json_decode(file_get_contents("php://input"), true);

//建立SQL
$sql = "
    UPDATE member
    SET member_status = :status
    WHERE member_id = :id
";

$statement = $dsn_link->prepare($sql);

// 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
$statement->bindValue("status", $member["status"]);
$statement->bindValue("id", $member["id"]);


// 執行
$statement->execute();
echo json_encode($member);

?>