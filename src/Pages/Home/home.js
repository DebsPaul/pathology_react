import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard from '../../Components/Dashboard.js';

export default function Home() {
    return (
        <>
            {/* <!--------------------------------------- CONTENT --> */}
                <main id="content" className="home">
                    <div className="container">
                        
                        {/* <!------------------------- TAGLINE --> */}
                        <div className="tagline h5">Advanced Healthcare <br /> Made Personal</div>
                        {/* <!------------------------- /TAGLINE --> */}





                        {/* <!------------------------- BANNER --> */}
                        <div id="banner">
                            <div className="card bg-clr-default text-center text-light">
                                <div className="h5 title">Welcome to MozPathLab</div>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab molestias eveniet asperiores velit accusantium quaerat assumenda? Quasi atqu.
                                </p>

                                <div className="buttons text-center mt-3">
                                    <a href="#" className="btn btn-light btn-sm">Know More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!------------------------- /BANNER --> */}






                        {/* <!------------------------- SERVICES --> */}
                        <div id="services" className="my-4">
                            <div className="section-title">
                                <div className="title">Our Services</div>
                                <Link to="/categories" className="see-all">See All</Link>
                            </div>


                            <div className="service-list">
                                <Link to="/service-listing" className="service">
                                    <div className="image-wrapper"><img className="lazy" src={ require("../../Assets/images/service1.png") } alt="" /></div>
                                    <div className="title"><b>X-Ray</b></div>
                                </Link>
                                <Link to="/service-listing" className="service">
                                    <div className="image-wrapper"><img className="lazy" src={ require("../../Assets/images/service2.png") } alt="" /></div>
                                    <div className="title"><b>Cardiology</b></div>
                                </Link>
                                <Link to="/service-listing" className="service">
                                    <div className="image-wrapper"><img className="lazy" src={ require("../../Assets/images/service3.png") } alt="" /></div>
                                    <div className="title"><b>USG</b></div>
                                </Link>
                                <Link to="/service-listing" className="service">
                                    <div className="image-wrapper"><img className="lazy" src={ require("../../Assets/images/service4.png") } alt="" /></div>
                                    <div className="title"><b>MRI</b></div>
                                </Link>
                                <Link to="/service-listing" className="service">
                                    <div className="image-wrapper"><img className="lazy" src={ require("../../Assets/images/service5.png") } alt="" /></div>
                                    <div className="title"><b>CT Scan</b></div>
                                </Link>
                                <Link to="/service-listing" className="service">
                                    <div className="image-wrapper"><img className="lazy" src={ require("../../Assets/images/service6.png") } alt="" /></div>
                                    <div className="title"><b>Neurology</b></div>
                                </Link>
                            </div>
                        </div>
                        {/* <!------------------------- /SERVICES --> */}






                        {/* <!------------------------- DASHBOARD --> */}
                        <Dashboard />
                        {/* <!------------------------- /DASHBOARD --> */}

                    </div>
                </main>
            {/* <!--------------------------------------- /CONTENT --> */}
        </>
    );
}