function showList(str) { // str is the membertype
    var xhttp;
    if (str == "") {
      document.getElementById("table").innerHTML = "Table will be shown here...";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("table").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/functions/getuserstable.php?q="+str, true);
    xhttp.send();
}