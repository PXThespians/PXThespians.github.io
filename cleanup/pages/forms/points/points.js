let previouscat = "performance"

function goHome(){
    window.location.assign("../../../index.html")
}

function openSelect(category){
    document.getElementById(previouscat).hidden = true
    document.getElementById(category).hidden = false
    previouscat = category
}

function fillUserInfo(){
    // translating user info into html text
    console.log('done');
    let userName = localStorage.getItem('username')
    let id = localStorage.getItem("userID")
    document.getElementById("userTell").innerText = userName + " " + id;

    // officerCheck
    if (localStorage.getItem("membertype") == "officer"){
        document.getElementById("restricted").removeAttribute('hidden')
    }
}

function createPerformance(){
    
}