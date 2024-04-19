import PropTypes from "prop-types";
import Forwarding from "../svg/Forwarding";
import Github from "../svg/Github";
import "./Article.scss";

const ArticleItem = ({ title, description, githubUrl, liveUrl, skills }) => {
	return (
		<article>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="skills">
				<p>{skills}</p> 
			</div>
			<div className="project__links__wrapper">
				<a href={githubUrl} target="_blank" rel="noreferrer">
					<Github />
				</a>
				<a href={liveUrl} target="_blank" rel="noreferrer">
					<Forwarding />
				</a>
			</div>
		</article>
	);
};

ArticleItem.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	skills: PropTypes.string,
	liveUrl: PropTypes.string,
	githubUrl: PropTypes.string,
};

export default ArticleItem;
