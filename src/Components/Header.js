import React, { useState } from 'react'
import AjaxLoader from './AjaxLoader';
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";




export default function Header(props) {
    const [myAccountDropdown, setMyAccountDropdown] = useState(false);

    const toggleMyAccountDropdown = (e)=> {
        myAccountDropdown ? setMyAccountDropdown(false) : setMyAccountDropdown(true);
        // e.preventDefault();
    }

    return (
        <header id="header">
            <AjaxLoader />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3 text-left">
                        <a id="sidemenuOpen" className="" onClick={props.showSideMenu}>
                            <i className="icon icon-menu"></i>
                        </a>


                        <div id="sidemenuWrap">
                            <a onClick={props.showSideMenu} className="text-right d-block">
                                <i className="icon icon-close" id="sidemenuClose"></i>
                            </a>

                            <ul id="sidemenu">
                                <li><Link to="/" onClick={props.showSideMenu}>Home</Link></li>
                                <li><Link to="/appointments" onClick={props.showSideMenu}>Appointments</Link></li>
                                <li><Link to="/categories" onClick={props.showSideMenu}>Categories</Link></li>
                                <li><Link to="/my-account" onClick={props.showSideMenu}>Account</Link></li>
                                <li><Link to="/" onClick={props.showSideMenu}>Settings</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-6 text-center">
                        <Link to="/" className="image-wrapper logo"><img className="lazy" src={props.logo} alt="" /></Link>
                    </div>

                    <div className="col-3 text-right position-relative d-flex align-items-center justify-content-end">
                        {/* <!-- if Logged In --> */}
                        <a id="myaccountToggle" className="" onClick={toggleMyAccountDropdown}>
                            <img className="lazy" src="https://i.pravatar.cc/300" alt="" />
                        </a>
                        <ul id="myaccountDrop" className={"headerDropdown " + (myAccountDropdown ? "d-block" : "d-none")}>
                            <li><Link to="/my-account" onClick={toggleMyAccountDropdown}>My Account</Link></li>
                            <li><Link to="/my-account" onClick={toggleMyAccountDropdown}>Edit Profile</Link></li>
                            <li><Link to="/my-account" onClick={toggleMyAccountDropdown}>Change Password</Link></li>
                            <li><Link to="/my-account" onClick={toggleMyAccountDropdown}>Logout</Link></li>
                        </ul>
                        {/* <!-- /if Logged In --> */}
                        
                        



                        {/* <!-- if NOT Logged In -->
                        <!-- <a href="#" id="loginToggle" className="">
                            <i className="icon icon-user"></i>
                        </a>
                        <ul id="loginDrop" className="headerDropdown">
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                        </ul> -->
                        <!-- /if NOT Logged In --> */}
                    </div>
                </div>
            </div>
        </header>
    )
}