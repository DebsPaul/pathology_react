import React from 'react'




export default function Footer(props) {
    return (
        <footer id="footer">
            <div className="innerWrap">
                <a href="#" className="item active">
                    <i className="icon icon-home"></i>
                    <span>Home</span>
                </a>
        
                
                <a href="#" className="item">
                    <i className="icon icon-calendar"></i>
                    <span>Appointments</span>
                </a>
        
        
                <a href="#" className="item">
                    <i className="la la-th-large"></i>
                    <span>Categories</span>
                </a>


                <a href="#" className="item">
                    <i className="icon icon-cog"></i>
                    <span>Account</span>
                </a>
            </div>
        </footer>   
    )
}