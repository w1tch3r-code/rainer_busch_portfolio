import { Link } from "react-router-dom";
import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import "./NavResume.scss";
import Mond from "../svg/Mond";
import Sonne from "../svg/Sonne";

const NavResume = () => {
	
	const [darkMode, setDarkMode] = useContext(DarkModeContext);
	
	const changeMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	return (
		<div className="navbar__wrapper">
			<nav className="resume__navbar">
				<div>
					<Link to={"/"} className="logo">
						RB.
					</Link>
				</div>
				<ul className="main-nav">
					<li>
						<span onClick={changeMode}>{darkMode ? <Mond /> : <Sonne />}</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavResume;
