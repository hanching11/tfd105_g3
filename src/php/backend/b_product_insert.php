<?php

    include "connect.php";

    $title = $_POST["title"] ?? '';
    $price = $_POST["price"] ?? 0;
    $artist = $_POST["artist"] ?? '';
    $quantity = $_POST["count"] ?? 0;
    $describe = $_POST["describe"] ?? '';
    $status = $_POST["status"] ?? 0;

  
    if(isset($_POST["action"])&&($_POST["action"]=="add")) {

        $sql =" INSERT INTO `produce`(`product_name`, `product_artist`, `product_info`, `product_price`, `product_count`, `product_status`)
        VALUES (?,?,?,?,?,?)";

    }

    $stmt = $dsn_link->prepare($sql);

    $values = [

        $title,
        $artist,
        $describe,
        $price,
        $quantity,
        $status,
       
    ];

    $stmt->execute($values);

    $id = $dsn_link->lastInsertId();

    if(isset($_FILES["file"])) {

        //count total files
        $countfiles = count($_FILES["file"]["name"]);
    

        for($i = 0;$i<$countfiles;$i++){
            $filename = $_FILES["file"]["name"][$i];
            $target_file = "../../../dist/img/Shop/".$filename;
    
            $file_extension = pathinfo($target_file,PATHINFO_EXTENSION);
            $file_extension = strtolower($file_extension);
    
            $Valid_extension = array("png","jpeg","jpg");
    
            if(in_array($file_extension, $Valid_extension)) {
                if(move_uploaded_file($_FILES["file"]["tmp_name"][$i], $target_file)) {
                    $column = '`product_img' . ($i > 0 ? ('_' . $i) : '') . '`';

                    $sql =" UPDATE `produce` SET $column = :img WHERE `product_id` = :product_id";
                    
                    $stmt = $dsn_link->prepare($sql);
            
                    $stmt->execute((array(':img' => $target_file, ':product_id' => $id)));
                }
            }
    
        }
    }
    
   
    header("Location: http://localhost/dist/b_product.html")



?>