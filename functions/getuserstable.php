<?php
$mysqli = new mysqli("ius.h.filess.io", "ThespiansTest_walkpageit", "38f41170be287f55148b375d6f569a266196631f", "ThespiansTest_walkpageit");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT name, userID, membertype, email, totalpoints
FROM all_users WHERE membertype = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($name, $uid, $memtype, $email, $totpoints);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>Full Name</th>";
echo "<td>" . $name . "</td>";
echo "<th>UserID</th>";
echo "<td>" . $uid . "</td>";
echo "<th>Member Type</th>";
echo "<td>" . $memtype . "</td>";
echo "<th>Registered Email</th>";
echo "<td>" . $email . "</td>";
echo "<th>Total Points</th>";
echo "<td>" . $totpoints . "</td>";
echo "</tr>";
echo "</table>";
?>
