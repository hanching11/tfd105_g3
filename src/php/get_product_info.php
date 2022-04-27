<?php
include("./connect.php");


// $p_info = json_decode(file_get_contents("php://input"), true);
$id = $_POST["product_id"];

//建立SQL語法
// $sql = "SELECT * FROM PRODUCT WHERE product_id = :product_id and product_status = 1";
$sql = "SELECT * FROM product WHERE product_id = ${id}";


//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $dsn_link->prepare($sql);
// $statement->bindValue(":product_id, $p_info["product_id");
$statement->execute();

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll(PDO::FETCH_ASSOC);
// PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
// PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號

echo json_encode($data);
?>