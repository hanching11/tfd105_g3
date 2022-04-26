<?php

function get_total_all_records()
{
	include "connect.php";
	$statement = $connection->prepare("SELECT * FROM product");
	$statement->execute();
	$result = $statement->fetchAll();

	return $statement->rowCount();
}

?>