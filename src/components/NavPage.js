import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"
import FullWorks from "./FullWorks"
import React from "react"

const NavPage = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/works" element={<FullWorks/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default NavPage