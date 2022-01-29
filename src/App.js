import React, { useState } from 'react';

import './Assets/css/style.css';
import './Assets/css/media.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home/home.js';
import Appointments from './Pages/Appointments/appointments.js';
import Categories from './Pages/Categories/categories.js';
import MyAccount from './Pages/MyAccount/myaccount.js';
import ServiceListing from './Pages/ServiceListing/service-listing.js';
import SingleService from './Pages/SingleService/single-service.js';

import logo from './Assets/images/logo.png';

 
function App() {
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	const toggleSideMenu = (e)=> {
		// console.log(sideMenuOpen);
		sideMenuOpen ? setSideMenuOpen(false) : setSideMenuOpen(true);

		if (sideMenuOpen) {
			document.body.classList.remove('sidemenuOpen');
		} else {
			document.body.classList.add('sidemenuOpen');
		}

		// e.preventDefault();
	}

	return (
		<>
			{/* <button onClick={toggleSideMenu}>Khul Ja Sim Sim</button> */}
			<Router>
				<Header logo={logo} showSideMenu={toggleSideMenu} />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/appointments' element={<Appointments />} />
					<Route path='/categories' element={<Categories />} />
					<Route path="/service-listing" element={<ServiceListing />} />
					<Route path="/single-service" element={<SingleService />} />
					<Route path='/my-account' element={<MyAccount />} />
				</Routes>

				<Footer />
			</Router>
		</>
	);
}

export default App;
