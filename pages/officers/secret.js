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

function showPopUp(){
  let window = document.getElementById("popWindow");
  window.style.display = "block";
  let shadow = document.getElementById("opaque")
  shadow.style.display = "block";
}

function closePopUp(){
  let window = document.getElementById("popWindow")
  window.style.display = "none"
  let shadow = document.getElementById("opaque")
  shadow.style.display = "none"
}

async function submit(){
  let username = document.getElementById('name').value
  let email = document.getElementById('email').value
  let membertype = document.getElementsByName('membertype')[0].value
  console.log(membertype)
  let points = document.getElementById('points').value

  // Clear area
  


  if (username != "" && email != "" && membertype != ""){
    var xhttp;
    let myPromise = new Promise(function (resolve) {
      membertype = "officer"
      xhttp = new XMLHttpRequest();
      xhttp.open("POST", "/functions/createuser.php?user=${username}&email=${email}&mem=${membertype}&points=${points}", true)
      xhttp.onload = function(){
          if (this.status == 200) {
              resolve('User Created!')
          } else {
              resolve('server error. Try again')
          }
      }
      xhttp.send()
    })
    document.getElementById("confirm").innerText = await myPromise;
  }

  
}