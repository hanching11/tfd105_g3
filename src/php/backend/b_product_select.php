<?php

    include "connect.php";

    $sql = "SELECT * FROM produce WHERE `product_id` = :product_id";

    $stmt = $dsn_link->prepare($sql);


    $stmt->execute($sql);
    $result = $select->fetchall();

    foreach($result as $row)
    {
        $_SESSION['product_id_key'] = $row['product_id']; 

    }       




?>