<?php
include("./connect.php");


//---------------------------------------------------
$order = json_decode(file_get_contents("php://input"), true);
// echo json_encode($member);

//建立SQL
$sql = "INSERT INTO `order_list`(
`member_id`,
`discount_code_id`,
`account`,
`order_pro_price`,
`address`,
`order_status`,
`order_time`,
`pay_type`,
`pay_status`)
VALUES(
:member_id,
'折扣碼未處理',
:account,
:order_pro_price,
:address,
0,
CURDATE(),
'匯款',
'0')";

  // 包裝起來才可以使PHP 用bindValue
$statement = $dsn_link->prepare($sql);

session_start();
$member = $_SESSION['member'];

$statement->bindValue(":member_id", $member["member_id"]);
$statement->bindValue(":account", $member["account"]);
$statement->bindValue(":order_pro_price", 999999);
$statement->bindValue(":address", '地址');



 //執行
$statement->execute();
      //  echo json_encode(['status'=> 'SUCCESS']);
      //  echo "新增成功!";


