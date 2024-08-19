import {React, lazy, Suspense} from "react"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

// places required
import Home from "/src/pages/Home.js"
import Loading from "/src/components/Loading"
const Points = lazy(() => import("/src/forms/Points.js"))
const Control = lazy(() => import("/src/pages/Control.js"))

const Land = (props) => {

    return (
        <div className="container">
            <Navbar permissions = {props.permissions}></Navbar> 
            <Suspense fallback = {<Loading />}>
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/points" element = {<Points />} />
                    <Route path = "/officers" element = {<Control />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Land