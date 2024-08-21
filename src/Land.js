import React, { lazy, Suspense } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

// places required
import Home from "/src/pages/Home.js"
import Navbar from "/src/components/Navbar"
import Loading from "/src/components/Loading"
const Control = lazy(() => import("/src/pages/Control.js"))
const Points = lazy(() => import("/src/forms/Points.js"))
//const Control = lazy(() => import("/src/pages/Control.js"))

const Land = (props) => {
    console.log("hm what")

    return (
        <div className="container">
            <Navbar permissions = {props.permissions} />
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