let userData = {
    name: "",
    password: "",
    userID: 0,
    membertype: ""
}

function checkForSavedPass(){
    if(localStorage.getItem("password") != null){
        if (localStorage.getItem("username") == "Aaron Li"){
            if (localStorage.getItem("password") == "loremipsum"){
                window.location.assign('../land.html')
            }
        }
    }
}

function login(){
    inName = document.getElementById("name").value
    inPass = document.getElementById("password").value
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
    }
}