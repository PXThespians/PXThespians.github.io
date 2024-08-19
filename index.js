import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useNavigate, Routes, Route} from "react-router-dom"
import Login from './src/Login.js'
import Land from "./src/Land.js"

//* set up react

const container = document.getElementById('root')
const root = createRoot(container)

let place = {}

if (localStorage.getItem("auth")) {
    const auth = JSON.parse(localStorage.getItem("auth"))

        // this is weirdly written, but it's more understandable than the other way of doing the same thing
    if (auth.loginState == 1 && auth.email != null) { 
        place = Land({permissions: auth.permissions})
    } else {
        place = Login
    }
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            {place}
        </BrowserRouter>
    </React.StrictMode>
)



export default root