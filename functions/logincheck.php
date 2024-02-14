<?php

$mysqli = new mysqli("sql300.infinityfree.com", "if0_35978496", "sAqWxTUCxZX", "if0_35978496_ThespDatabase");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT password, membertype
FROM all_users WHERE name = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
if(!$stmt->execute()) echo "nouser";
$stmt->store_result();
$stmt->bind_result($pass, $type);
$stmt->fetch();
$stmt->close();

echo $pass;
echo $type

?>