import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.scss";

const ButtonItem = ({ href, title }) => {
	return (
		<Link
			to="#"
			className="button"
			onClick={(e) => {
				window.location.href = href;
				e.preventDefault();
			}}>
			{title}
		</Link>
	);
};

ButtonItem.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default ButtonItem;
