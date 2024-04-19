import PropTypes from "prop-types";
import ButtonItem from "../button/ButtonItem";
import Github from "../svg/Github";
// import Linkedin from "../svg/Linkedin";
import "./Hero.scss";

const Hero = ({ isMenuOpen }) => {
	return (
		<section className={`section__hero ${isMenuOpen ? "active" : ""}`}>
			<h1>
				Hallo, ich bin <span>Rainer&nbsp;Busch</span>
			</h1>
			<h3>Ein Junior Frontend-Webdeveloper.</h3>
			<p>
				Ich bin ein begeisterter Junior Frontend-Webdeveloper mit fundierten
				Kenntnissen in HTML und CSS und erweiterten Kenntnissen in JavaScript/React.
				Meine Fähigkeiten in der Webentwicklung werden durch eine solide Basis an 
				praktischer Erfahrung als Mediengestalter und Webdesigner unterstützt. 
				Ich freue mich darauf, mein Know-how und meine Leidenschaft für die 
				digitale Gestaltung in Ihrem Team einzubringen.
			</p>
			<div className="resume__wrapper">
				<ButtonItem href={"/resume"} title={"resume"} />
				<a
					href="https://github.com/w1tch3r-code"
					target="_blank"
					rel="noreferrer">
					<Github />
				</a>
				{/* <a href="#" target="_blank" rel="noreferrer">
					<Linkedin />
				</a> */}
			</div>
		</section>
	);
};

Hero.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired,
};

export default Hero;
