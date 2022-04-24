<?php

        include("connect.php");
        
       //---------------------------------------------------
       $account = $_POST["account"];
       $pwd = $_POST["pwd"];

       //建立SQL語法
       $sql = "SELECT * FROM member 
       WHERE Name = ? and 
             PWD = ? ";  

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->prepare($sql);
       $statement->bindValue(1, $account);
       $statement->bindValue(2, $pwd);
       $statement->execute();

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       if(count($data) > 0){
            // echo "登入成功!";

            // set session ( 使用者輸入帳號暫存到伺服器端 )
            session_start();
            $_SESSION["memberID"] = $account;

            header("Location: connect.php");
       }else{
            echo "帳號或密碼錯誤!!";
       }

?>