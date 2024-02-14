<?php

$mysqli = new mysqli("sql300.infinityfree.com", "if0_35978496", "sAqWxTUCxZX", "if0_35978496_ThespDatabase");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT name, userID, membertype, email, totalpoints
FROM all_users WHERE membertype = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($ans['name'], $ans['uid'], $ans['memtype'], $ans['email'], $ans['totpoints']);
$len = $stmt->num_rows;
for ($i=0;$i<$len;$i++){
  $stmt->data_seek($i);
  $stmt->fetch();
  foreach ($ans as $key=>$value){
      $result[$i][$key]=$value;
  }
}


echo "<table>";
  echo "<tr>";
    echo "<th>Full Name</th>";
    echo "<th>UserID</th>";
    echo "<th>Member Type</th>";
    echo "<th>Registered Email</th>";
    echo "<th>Total Points</th>";
  echo "</tr>";
  for($i = 0; $i<$len; $i++){
    echo "<tr>";
      echo "<td>" . $result[$i]['name'] . "</td>";
      echo "<td>" . $result[$i]['uid'] . "</td>";
      echo "<td>" . $result[$i]['memtype'] . "</td>";
      echo "<td>" . $result[$i]['email'] . "</td>";
      echo "<td>" . $result[$i]['totpoints'] . "</td>";
    echo "</tr>";
  }
echo "</table>";

$stmt->close();
?>