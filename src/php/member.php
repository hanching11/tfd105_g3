<?php
    include("connect.php");

    $SQL = "
    select
        ol.order_id,
        od.product_id,
        ol.account,
        od.order_detail_price,
        od.quantity,
        ol.pay_type,
        ol.address,
        ol.order_status,
        ol.pay_status
    from order_List ol
        join order_detail od
            on ol.order_id = od.order_id
    ";
    
    $stmt = $dsn_link->prepare($SQL);
    $stmt->execute();
    echo json_encode($stmt->fetchAll());
?>