

function goHome(){
    window.location.assign("../../../index.html")
}

function toggleText(){

}

function fillUserInfo(){
    console.log('done');
    let userName = localStorage.getItem('username')
    let id = localStorage.getItem("userID")
    
    document.getElementById("userTell").innerText = userName + " " + id;
}