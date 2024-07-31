import React from "react";
import { NavLink } from "react-bootstrap";
import { useEffect } from "react";

const Navbar = () => {
    useEffect(() => window.scrollTo({ top: 500, behavior: "smooth" }), []);
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/about">
                About <span className="sr-only"></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/projects">
                Projects
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">
                Contact
                </a>
            </li>
            </ul>
    </nav>
    )
}
export default Navbar;
