<?php

    $product_id = $_POST["product_id"]; 
    $title = $_POST["title"];
    $price = $_POST["price"];
    $artist = $_POST["artist"];
    $quantity = $_POST["quantity"];
    $describe = $_POST["describe"];
    $status = $_POST["status"];

    include "connect.php";


    if(isset($_POST["action"])&&($_POST["action"]=="update")) {

        $sql =" UPDATE produce SET product_name = :product_name,
        product_artist = :product_artist,
        product_price = :product_price,
        product_img = :product_img,
        product_in_img_1 = :product_in_img_1,
        product_in_img_2 = :product_in_img_2,
        product_info = :product_info
        product_quantity = :`product_quantity,
        product_status = :product_status
        WHERE ID = :ID";
    }
    
        $stmt->bindParam(':product_name',$title,PDO::PARAM_STR);
        $stmt->bindParam(':product_artist',$artist,PDO::PARAM_STR);
        $stmt->bindParam(':product_img',$file[0]);
        $stmt->bindParam(':product_info',$describe,PDO::PARAM_STR);
        $stmt->bindParam(':product_price',$price,PDO::PARAM_STR);
        $stmt->bindParam(':product_status',$status,PDO::PARAM_STR);
        $stmt->bindParam(':product_quantity',$quantity,PDO::PARAM_STR);  
        $stmt->execute();


    header("Location: ../dist/b_product.html")


?>