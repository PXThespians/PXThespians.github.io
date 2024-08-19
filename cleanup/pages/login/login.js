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

async function fetchAndLog(){
    let inName = document.getElementById("name").value
    let userID = 0;

    let myPromise = new Promise(function (resolve) {
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/functions/authenticate.php?q="+inName, true)
        xhttp.onload = function(){
            if (this.status == 200) {
                resolve(this.responseText)
            } else {
                resolve('server error')
            }
        }
        xhttp.send()
    })
    // get password and membertype where username = inName
    document.getElementById('infoBox').innerText = await myPromise

    let stringify = document.getElementById('infoBox').innerText
    let split = stringify.split(',')
    let truPass = split[0];
    let membertype = split[1];
    userID = split[2];
    
    // sql end, password check
    login(inName, truPass, membertype, userID)
}

function login(name, truPass, membertype, uid){
    let inPass = document.getElementById("password").value
    if (truPass.charAt(0) == '<'){
        document.getElementById('error').innerText = "server error, please wait..."
    } else 
    if (truPass != ''){
        if (truPass == "nouser"){ 
            document.getElementById('error').innerText = "Name not found: check attendance sheet for correct name"
        } else if (inPass == truPass) {
            localStorage.setItem('username', name)
            localStorage.setItem('membertype', membertype)
            localStorage.setItem('userID', uid)
            if (document.getElementById('save').getAttribute('checked') == true){
                localStorage.setItem('qcnksaloegbjdcdb', 1)
            }
            window.location.assign('/pages/land.html')
        } else {
            document.getElementById('error').innerText = "Username or Password incorrect"
        }
    } else {
        console.log('failed')
    }
}