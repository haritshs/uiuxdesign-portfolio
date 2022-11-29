import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="menu-line"></div>
                <aside className="menu">
                    <a href="/">Welcome</a>
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </aside>
            </div>
        </div>
    )
}

export default NavigationBar