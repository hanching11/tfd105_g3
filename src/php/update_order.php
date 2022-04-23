<?php
    include("connect.php");

    $order = json_decode(file_get_contents("php://input"), true);

    $sql = "UPDATE order_list
       SET order_status = :orderStatus
       WHERE order_id = :orderId";  

    $statement = $dsn_link->prepare($sql);
    $statement->bindValue(':orderStatus', $order["orderStatus"]);
    $statement->bindValue(':orderId', $order["orderId"]);
    $statement->execute();
    echo '12345';

?>