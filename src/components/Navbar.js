import React from "react";
import { useNavigate } from "react-router-dom"

const Navbar = (props) => {
    const navigate = useNavigate()
    /*if (props.permissions == true) {
        let secret = document.getElementById("restricted")
        secret.removeAttribute("hidden")
    }*/

    // stylin
        
    return (
        <>
            <div className = "navgroup">
                <div id = "input" className="navChoice">
                    
                    <label htmlFor = "control" >
                        <div id = "control" onClick={() => navigate("officers")}>
                            <p>Panel</p>
                        </div>
                    </label>
                </div>
                <div className = "dropdown">
                    <label htmlFor = "form-points">
                        <div id = "points" onClick = {() => navigate("points")}>
                            <p>Points</p>
                        </div>
                    </label>
                    <label htmlFor= "form-absences"> 
                    </label>
                </div>            
            </div>
        </>
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