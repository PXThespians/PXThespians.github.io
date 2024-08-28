import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import Login from './src/Login.js'
import Land from "./src/Land.js"

//* set up react

const container = document.getElementById('root')
const root = createRoot(container)

let place = 0

if (localStorage.getItem("auth")) {
    const auth = JSON.parse(localStorage.getItem("auth"))

        // this is weirdly written, but it's more understandable than the other way of doing the same thing
    if (auth.loginState == 1 && auth.email != null) { 
        place = 1 // land
    } else {
        place = 0 // login
    }
}

root.render(
        <HashRouter>
            {place == 0 ? <Login /> : <Land permissions = {localStorage.getItem("auth").permission} />}
        </HashRouter>
)



export default root