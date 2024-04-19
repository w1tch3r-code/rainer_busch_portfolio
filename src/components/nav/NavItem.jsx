import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ href, title }) => {
	return (
		<li>
			<Link
				to="#"
				onClick={() => {
					window.location.href = href;
				}}>
				{title}
			</Link>
		</li>
	);
};

NavItem.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default NavItem;
