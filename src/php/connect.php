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
    
    // function MemberDB(){ 
    //     //MySQL相關資訊
    //     $db_host = "127.0.0.1";
    //     $db_user = "tibamefe_since2021";
    //     $db_pass = "vwRBSb.j&K#E";
    //     $db_select = "tibamefe_tfd105g3";
    
    //     //建立資料庫連線物件
    //     $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
    
    //     //建立PDO物件，並放入指定的相關資料
    //     $pdo = new PDO($dsn, $db_user, $db_pass);
    //     return $pdo;
    // }

  
?>  