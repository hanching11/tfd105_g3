<?php

    include "connect.php";
   
    $i=count($_FILES["file"]["name"]);

    $files = [];

    for ($j=0; $j<$i; $j++){
        
        if($_FILES["file"]["error"][$j]==0) {
            if(move_uploaded_file($_FILES["file"]["tmp_name"][$j],"../../../dist/img/Shop//products/".$_FILES["file"]["name"][$j])) {
                $files[] = "../FileUpload/".$_FILES["file"]["name"][$j];
                echo $_FILES["file"]["name"][$j]."上傳成功<br />";
            }else{
                echo $_FILES["file"]["name"][$j]."上傳失敗<br />";
            }
        }
    }

    $title = $_POST["title"];
    $price = $_POST["price"];
    $artist = $_POST["artist"];
    $quantity = $_POST["quantity"];
    $describe = $_POST["describe"];
    $status = $_POST["status"];

  
    if(isset($_POST["action"])&&($_POST["action"]=="add")) {

        $sql =" INSERT INTO produce (product_name ,product_artist ,product_img, product_in_img_1, product_in_img_2 ,product_info ,product_price ,product_quantity ,product_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    }

    $stmt = $dsn_link->prepare($sql);
    $stmt->bindParam(1, $title, $artist, $files[0], '', '', $describe,  $price,  $quantity, $status);
    $stmt->execute();

    // $dsn_link->close();


    header("Location: ../dist/b_product.html")

 
   
    //  header("Location:;../dist/b_product.html")



?>