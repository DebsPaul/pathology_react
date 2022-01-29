import React from 'react'
import { Link, NavLink } from 'react-router-dom';




export default function Footer(props) {
    return (
        <footer id="footer">
            <div className="innerWrap">
                <NavLink to="/" className="item" activeclassname="active">
                    <i className="icon icon-home"></i>
                    <span>Home</span>
                </NavLink>

                
                <NavLink to="/appointments" className="item" activeclassname="active">
                    <i className="icon icon-calendar"></i>
                    <span>Appointments</span>
                </NavLink>
        
        
                <NavLink to="/categories" className="item" activeclassname="active">
                    <i className="la la-th-large"></i>
                    <span>Categories</span>
                </NavLink>


                <NavLink to="/my-account" className="item" activeclassname="active">
                    <i className="icon icon-cog"></i>
                    <span>Account</span>
                </NavLink>
            </div>
        </footer>   
    )
}