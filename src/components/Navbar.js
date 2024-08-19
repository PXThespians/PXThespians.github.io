import React from "react";
import '/styles/Navbar.css'
import 'sql.js'

const Navbar = (props) => {
        
    /*if (props.permissions == true) {
        let secret = document.getElementById("restricted")
        secret.removeAttribute("hidden")
    }*/

    // styling
    const navStyle = {
        display: "flex",
        gridTemplateColumns: "auto auto",
        margin: "0px 50px",
        alignContent: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
    const inputStyle = {
        padding: "10px"
    }
    const words = {
        width: "100px", height: "50px", margin: "0px", textAlign: "center"
    }
        
    return (
        
        <div className = "navgroup" style = {navStyle}>
            <div id = "input" className="navChoice">
                
                <label for = "here">
                    <input id = "here" type = "radio" name = "place" value = "here" hidden/> 
                    <div style = {words}>
                        <p>here</p>
                    </div>
                </label>
            </div>
            <div className = "dropdown">
                <input id = "there" type= "radio" name = "place" value = "there"></input>
                <labeL for = "there">there</labeL>
            </div>            
        </div>
        
        /*<div className = "navList">
            <nav role = "navigation"><ul>
                <li><a><span>logohere</span></a></li>
                <li>
                <div className = "dropdown">
                    <button className = "listElement" aria-expanded="false" aria-haspopup="listbox"> Forms</button>
                    <div className = "dropContent">
                        <a>Points</a>
                        <a>Absence</a>
                    </div>
                    
                </div>
                </li> 
                <li>
                <a className = "listElement">Shows</a>
                </li>
                <li>
                    <a className = "listElement">Writing space</a>
                </li>
                <li hidden id = "restricted">
                    <a className = "listElement" href = "/pages/officers/secret.html">Officer Space</a>
                </li>
            </ul></nav>
            <ul className = "floatRight">
                <div className = "drop">
                    <button className = "listElement" aria-expanded="false" aria-haspopup="listbox" style = "display: grid; grid-template-columns: auto auto;"><img src ="/graphics/userbutton.png" style = "height: 20px;"></img><p id = "usernameplace" style = "margin: 0px; padding-left: 10px;"></p></button>
                    <div className = "dropContent">
                        <a href = "/pages/me/me.html">Profile</a>
                        
                        <a className = "listElement" href = "/index.html" onclick = "logout()">Log Out</a>
                    </div>
                </div>
            </ul>
        </div>*/
    )

}


export default Navbar