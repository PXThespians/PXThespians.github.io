var mysql = require("mysql");
var hostname = "ius.h.filess.io";
var database = "ThespiansTest_walkpageit";
var port = "3307";
var username = "ThespiansTest_walkpageit";
var password = "38f41170be287f55148b375d6f569a266196631f";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
