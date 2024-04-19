import PropTypes from "prop-types";
import { useContext } from "react";
import DarkModeContext from "../components/DarkModeContext";
import Header from "../components/header/Header";
import MainElement from "../components/main/MainElement";
import Footer from "../components/footer/Footer";

const Home = ({ isMenuOpen, setIsMenuOpen }) => {

	const [darkMode] = useContext(DarkModeContext);
	
	return (
		<div className={`wrapper ${darkMode ? "light" : ""}`}>
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<MainElement />
			<Footer />
		</div>
	);
};
Home.propTypes = {
	setIsMenuOpen: PropTypes.func.isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
};

export default Home;
