
function officerReveal() {
    if (localStorage.getItem("membertype") == "officer"){
        document.getElementById("restricted").removeAttribute('hidden')
    }

    // also fill in the person thing
    document.getElementById("usernameplace").innerText = localStorage.getItem("username")
}
function logout(){
    localStorage.clear()
}