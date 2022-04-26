<?php
include("./connect.php");

$order = json_decode(file_get_contents("php://input"), true);

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
  1,
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
$statement->bindValue(":order_pro_price", $order["orderTotal"]);
$statement->bindValue(":address", $order["address"]);
$statement->execute();

$sql = "INSERT INTO `order_detail`
    (`order_id`,
    `product_id`,
    `quantity`,
    `order_detail_price`)
  VALUES
    (:order_id,
    :product_id,
    :quantity,
    :order_detail_price)
  ";
$statement = $dsn_link->prepare($sql);
$orderId = $dsn_link->lastInsertId();
$statement->bindValue(":order_id", $orderId);
$items = $order["items"];
foreach($items as $_ => $item) {
  $statement->bindValue(":product_id", $item["id"]);
  $statement->bindValue(":quantity", $item["amount"]);
  $statement->bindValue(":order_detail_price", $item["price"]);
  $statement->execute();
}

echo json_encode(['order_id'=> $orderId]);