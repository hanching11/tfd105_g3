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
    WHERE member_id =  :member_id
    ";
    // print_r($SQL);
    $statement = $dsn_link->prepare($SQL);

    session_start();
    $member = $_SESSION['member'];
    $statement->bindValue(":member_id", $member["member_id"]);


    $statement->execute();
    echo json_encode($statement->fetchAll());

    
?>