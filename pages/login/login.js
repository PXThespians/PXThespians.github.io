let userData = {
    name: "",
    password: "",
    userID: 0,
    membertype: ""
}

function checkForSavedPass(){
    if(localStorage.getItem("password") != null){
        if (localStorage.getItem("password") == "loremipsum"){
            window.location.assign('../land.html')
        }
    }
}

function login(){
    let inName = document.getElementById("name").value
    let inPass = document.getElementById("password").value
    let truPass = "";
    // get password where username = inName

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        truPass = this.responseText;
        console.log(truPass)
      }
    };

    xhttp.open("GET", "/functions/logincheck.php?q="+inName, true)
    xhttp.send()
    /*
    if (truPass == "nouser"){
        document.getElementById('error').innerText = "User does not exist"
    } else if(inPass == truPass) {
        localStorage.setItem("username", inName)
        if (document.getElementById("save").checked == true){
            localStorage.setItem("password", inPass)
        }
        localStorage.setItem("userID", 1001)
        // if(membertype == 'officer'){}
        localStorage.setItem("membertype", 'officer')
        window.location.assign('../land.html')
    } else {
        document.getElementById('error').innerText = "Password incorrect"
    }
    

    // this will eventually be modified to be sql code
    if (inName == "Aaron Li" ) {// will eventually check if exists in sql database
        if (inPass == "loremipsum"){
            localStorage.clear()
            localStorage.setItem("username", inName)
            if (document.getElementById("save").checked == true){
                localStorage.setItem("password", inPass)
            }
            localStorage.setItem("userID", 1001)
            // if(membertype == 'officer'){}
            localStorage.setItem("membertype", 'officer')
            window.location.assign('../land.html')
        } else {
            document.getElementById('warning').setAttribute('hidden', false)
        }
    } else {
        document.getElementById('warning').setAttribute('hidden', false)
    }*/
}