import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "r"
import Login from './src/Login.js'
import Land from "./src/Land.js"

//* set up react
const container = document.getElementById('root')
const root = createRoot(container)

if (localStorage.getItem('auth') == null){
    root.render(<Login />)
} else {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Land />
            </BrowserRouter>
        </React.StrictMode>
    )
}



export default root