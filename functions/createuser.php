<?php

$mysqli = new mysqli("sql300.infinityfree.com", "if0_35978496", "sAqWxTUCxZX", "if0_35978496_ThespDatabase");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$memtype = $_POST['mem'];

$idsql = "SELECT COUNT() FROM all_users WHERE membertype = ?";

$stmt = $mysqli->prepare($idsql);
$stmt->bind_param("s", $memtype);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($count);
$stmt->fetch();

switch($memtype[0]){
    case "officer":
        $start = 1;
        break;
    case "member":
        $start = 2;
        break;
    case "apprentice":
        $start = 3;
        break;
    default:
        $start = 10;
        break;
};

$stmt -> close();
$id = $start * 1000 + intval($count) + 1;

$insert = "INSERT INTO all_users VALUES (?, ?, ?, 'loremipsum', ? ,?)";

// name, uid, membertype, password, email, points

$stmt = $mysqli->prepare($insert);
$stmt->bind_param("sissi", $_POST['user'], $id, $_POST['mem'], $_POST['email'], $_POST['points']);
$stmt->execute();
$stmt->store_result();
$stmt->close();

?>