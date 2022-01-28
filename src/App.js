import './Assets/css/style.css';
import './Assets/css/media.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import logo from './Assets/images/logo.png';

 
function App() {
	return (
		<>
			<Header logo={logo} />

			<Home />

			<Footer />
		</>
	);
}

export default App;
