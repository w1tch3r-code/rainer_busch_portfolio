import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EmailItem = ({ href, title }) => {
	return (
		<Link
			to="#"
			className="email"
			onClick={(e) => {
				window.location.href = href;
				e.preventDefault();
			}}>
			{title}
		</Link>
	);
};

EmailItem.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default EmailItem;
