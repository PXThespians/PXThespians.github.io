import React from "react"
import axios from 'axios'

console.log("entered")

const SERVER = "http://localhost:3000"

console.log("mark")

const Login = () => {
    console.log('loaded!')

    // everything here is hidden from the browser until it is loaded. Either way, all backend is handled by a hidden javascript server.js

    // thus, to store passwords and login information, we will use JSON strings and Polymorphism to encapsulate username and password into "Login"
    // In this case, the file system used to manage local data is in Json text stored locally on the browser. Polymorphism except used in a context where prototypes reign lol; not very powerful
    class LoginInfo {
        constructor(password, email){
            this.password = password
            this.email = email// how is 'this' in Javascript so powerful?
            this.loginState = 0
            this.permissions = 0

            this.error = () => {
                const passfield = document.getElementById("password")

                let inner = document.createElement("p")
    
                inner.setAttribute("innerText", "Username or Password Incorrect. Try again")
                inner.setAttribute("style", "color: red")
    
                passfield.append(inner) // give error message
            }

            this.success = async () => {
                location.reload()
            }

            this.authenticate = async () => {
                console.log(this.email)
                try { // in case the user is weird and chooses to click the submit button without filling in the forms (which would be incredibly weird)
                    // send request to API in server.js
                    console.log()
                    const response = await axios.post(SERVER + "/api/authenticate", {email: this.email, password: this.password}) // this is horrendous
    
                    console.log(response)
                    console.log(response.data.message)
    
                    // success conditions
                    if (response.data.message == "success"){
                        console.log("pas")
                        this.permissions = response.data.permissions
                        this.password = ""
                        this.loginState = 1
                        this.success()
                    } else if (response.data.message == "fail"){
                        this.error()
                    } else { // in case res.status is given as anything other than a string
                        console.log("server request error") 
                    }
                } catch {
                    this.error()
                }
                localStorage.setItem("auth", JSON.stringify(this))
            }
        }
        
    }

    let loginHandle = new LoginInfo("", "")

    return ( // catch-all case
        <div className = "container">
            <div className = "title">Login</div>
            <div className = "fields">
                <div className = "email"><image></image>
                    <input type = "text" placeholder= "linked email" onChange = {(event) => {loginHandle.email = event.target.value}}></input>
                </div>

                <div className = "password" id = "password"><image></image>
                    <input type= "password" placeholder= "password" onChange = {(event) => {loginHandle.password = event.target.value}}></input>
                </div>

                <button className = "submission" onClick={loginHandle.authenticate}>Login</button>
                
            </div>
        </div>
    )
}

export default Login