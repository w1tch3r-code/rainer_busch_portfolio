import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkModeContext from "../DarkModeContext";
import "./Nav.scss";
import Mond from "../svg/Mond";
import Sonne from "../svg/Sonne";
import NavItem from "./NavItem";

const NavList = ({ isMenuOpen, setIsMenuOpen }) => {

	const [darkMode, setDarkMode] = useContext(DarkModeContext);
	
	const changeMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	const toggleMenu = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	return (
		<>
			<div className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}>
				<div>
					<Link to={"/"} className="mobile-logo">
						RB.
					</Link>
				</div>
				<div className={"bar-wrapper"} onClick={toggleMenu}>
					<div className={`bar ${isMenuOpen ? "animate" : ""}`}></div>
				</div>
				<div>
					<span onClick={changeMode}>{darkMode ? <Mond /> : <Sonne />}</span>
				</div>
			</div>
			<div className="navbar__wrapper">
				<nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
					<div>
						<Link to={"/"} className="logo">
							RB.
						</Link>
					</div>
					<ul className="main-nav">
						<NavItem href={"#projects"} title={"projects"} />
						<NavItem href={"#skills"} title={"skills"} />
						<NavItem href={"#contact"} title={"contact"} />
						<li>
							<span onClick={changeMode}>
								{darkMode ? <Mond /> : <Sonne />}
							</span>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
NavList.propTypes = {
	setIsMenuOpen: PropTypes.func.isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
};

export default NavList;
