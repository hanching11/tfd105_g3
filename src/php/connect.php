<?php

    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "password";
    $db_name = "mydb";

    try{
        //建立資料庫連線物件
        $dsn_link = new PDO("mysql:host={$db_host};dbname={$db_name};charset=utf8",$db_user, $db_pass);

    }catch (PDOException $e) {
        print "資料庫連結失敗:{$e->getMessage()}";
        die();
    }
  
?>  