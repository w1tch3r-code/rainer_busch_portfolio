import PropTypes from "prop-types";
import Hero from "../hero/Hero";
import NavList from "../nav/NavList";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
	return (
		<header>
			<NavList
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<Hero isMenuOpen={isMenuOpen} />
		</header>
	);
};

Header.propTypes = {
	setIsMenuOpen: PropTypes.func.isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
};

export default Header;
