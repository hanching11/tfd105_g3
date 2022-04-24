<?php
include("./connect.php");


//---------------------------------------------------
$member = json_decode(file_get_contents("php://input"), true);
// echo json_encode($member);

//建立SQL
$sql = "insert into member(account,password,name,phone,member_status,birthday)
values (:account,:password,:name,:phone,'一般',:birthday);";

  // 包裝起來才可以使PHP 用bindValue
$statement = $dsn_link->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
// $statement->bindValue(":account", $member->account);
// $statement->bindValue(":password", $member->password);
// $statement->bindValue(":phone", $member->phone);
// $statement->bindValue(":address", $member->address);
// $statement->bindValue(":gender", $member->gender);
$statement->bindValue(":account", $member["account"]);
$statement->bindValue(":password", $member["password"]);
$statement->bindValue(":name", $member["name"]);
$statement->bindValue(":phone", $member["phone"]);
$statement->bindValue(":birthday", $member["birthday"]);



 //執行
$statement->execute();
      //  echo json_encode(['status'=> 'SUCCESS']);
      //  echo "新增成功!";


