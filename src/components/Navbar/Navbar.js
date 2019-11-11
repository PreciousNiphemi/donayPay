import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg'



const Navbar = () => {
    return (
        <header id="home">
            <div className="container-fluid">
                <div className="header animated slideInDown d-lg-flex justify-content-between align-items-center py-sm-3 py-2 px-sm-2 px-1">
                    <div id="logo">
                        <span><a href="/"> <img  className="logo" src = {logo} alt="logo" /> </a></span>
                    </div>
                    <div className="nav_w3ls ml-lg-5">
                        <nav>
                            <label for="drop" className="toggle">
                                <span></span>
                                <span> </span>
                                <span></span>
                            </label>
                            <input type="checkbox" id="drop" />
                            <ul className="menu">
                                <li><NavLink to='/howitworks' className="nav-link text-uppercase"> how it works </NavLink></li>
                                <li><NavLink to='/campaigns' className="nav-link text-uppercase"> Campaigns</NavLink></li>
                                <li><NavLink to='/contact' className="nav-link text-uppercase">Contact Us </NavLink></li>


                                <li className="ml-xl-5 ml-lg-2 mt-lg-0 mt-sm-4 mt-3">
                                <NavLink to='/login' className="reqe-button text-uppercase login-btn">Log in </NavLink>
                                <NavLink to='/signup' className="reqe-button text-uppercase signup-btn">Sign Up </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;