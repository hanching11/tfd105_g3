<?php
    include("../connect.php");

    $SQL = "
    select
        ol.order_id,
        od.product_id,
        m.account,
        od.order_detail_price,
        od.quantity,
        '???' as pay_type,
        ol.address,
        ol.order_status
    from order_list ol
        join order_detail od
            on ol.order_id = od.order_id
        join member m
            on ol.member_id = m.member_id
    ";
    
    $stmt = $pdo->prepare($SQL);
    $stmt->execute();
    echo json_encode($stmt->fetchAll());
?>