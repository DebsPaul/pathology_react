import React from 'react'
import AjaxLoader from './AjaxLoader';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";




export default function Header(props) {
    return (
        <header id="header">
            <AjaxLoader />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3 text-left">
                        <a href="#" id="sidemenuOpen" className="">
                            <i className="icon icon-menu"></i>
                        </a>


                        <div id="sidemenuWrap">
                            <div className="text-right">
                                <i className="icon icon-close" id="sidemenuClose"></i>
                            </div>

                            <ul id="sidemenu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Appointments</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Settings</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-6 text-center">
                        <a href="#" className="image-wrapper logo"><img className="lazy" src={props.logo} alt="" /></a>
                    </div>

                    <div className="col-3 text-right position-relative d-flex align-items-center justify-content-end">
                        {/* <!-- if Logged In --> */}
                        <a href="#" id="myaccountToggle" className="">
                            <img className="lazy" src="https://i.pravatar.cc/300" alt="" />
                        </a>
                        <ul id="myaccountDrop" className="headerDropdown">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Edit Profile</a></li>
                            <li><a href="#">Change Password</a></li>
                            <li><a href="#">Logout</a></li>
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