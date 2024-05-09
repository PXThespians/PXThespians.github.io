<?php

$db_credentials = require __DIR__ . '/../db-credentials.php';

$mysqli = new mysqli("sql300.infinityfree.com", $db_credentials['username'], $db_credentials['password'], "if0_35978496_ThespDatabase");
if($mysqli->connect_error) {
  exit('Could not connect');
}

if (isset($_POST['memtype'])){
    $memtype = $_POST['memtype'];
}

$idsql = "SELECT COUNT(*) FROM all_users WHERE membertype = ?";

$stmt = $mysqli->prepare($idsql);
$stmt->bind_param("s", $memtype);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($count);
$stmt->fetch();

switch($memtype){
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


try {
    $stmt = $mysqli->prepare($insert);
    $stmt->bind_param("sissd", $_POST['name'], $id, $memtype, $_POST['email'], $_POST['points']);
    $stmt->execute();
}
catch (Exception $e) {
    http_response_code(500);
    echo $e->getMessage();
}
$stmt->store_result();
$stmt->close();


?>