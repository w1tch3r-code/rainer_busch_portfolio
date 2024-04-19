import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
	faHtml5,
	faCss3,
	faSass,
	faJs,
	faReact,
	faNpm,
	faGithub,
	faGit,
	faFigma,
	faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import DarkModeContext from "../components/DarkModeContext";
import NavResume from "../components/navResume/NavResume";
import EmailItem from "../components/email/EmailItem";
import "./Resume.scss";

const Resume = () => {

	const [darkMode] = useContext(DarkModeContext);
	
	return (
		<div className={`wrapper ${darkMode ? "light" : ""}`}>
			<header className="header__resume">
				<NavResume />
			</header>
			<main className="main__resume">
				<section className="section__resume">
					<article className="article__experience">
						<div className="jobs">
							<h1>Rainer Busch</h1>
							<h3>Junior Frontend Developer</h3>
							<h3>Webdesigner</h3>
							<h3>Mediengestalter</h3>
						</div>
						<div className="summary">
							<h2>Summary</h2>
							<p>
								Meine Leidenschaft für die Gestaltung und Entwicklung digitaler
								Lösungen hat mich zu einem autodidaktischen Lernenden gemacht,
								der bestrebt ist, seine Fähigkeiten und Kenntnisse
								kontinuierlich zu erweitern. Ich habe mich intensiv mit den
								Grundlagen der Webentwicklung auseinandergesetzt und dabei
								diverse Weiterbildungen absolviert, um mein Wissen auf diesem
								Gebiet zu vertiefen.
							</p>
							<p>
								Meine jüngsten Weiterbildungen im Bereich der
								Frontend-Webentwicklung haben mir ein solides Fundament in den
								essenziellen Technologien wie HTML, CSS, JavaScript und React
								verschafft. Während des Bootcamps Front-End Web-Entwicklung habe
								ich nicht nur technische Fähigkeiten erworben, sondern auch ein
								Verständnis für Designprinzipien, User Experience und
								Projektmanagement entwickelt.
							</p>
							<p>
								Vor meiner Fokussierung auf die Webentwicklung sammelte ich
								wertvolle Berufserfahrung als Mediengestalter und Webdesigner.
								In diesen Rollen war ich maßgeblich an der Gestaltung und
								Umsetzung verschiedener Onlineformate beteiligt, wobei HTML und
								CSS stets zentrale Bestandteile meiner Arbeit waren.
							</p>
							<p>
								Die Kombination aus praktischer Erfahrung als Mediengestalter
								und meinen jüngsten Weiterbildungen im Bereich der
								Webentwicklung versetzt mich in die optimale Position, um einen
								nahtlosen Übergang in die Rolle eines Junior
								Frontend-Webdevelopers oder Junior Webentwicklers zu vollziehen.
								Ich bin hochmotiviert, mein Wissen und meine Fähigkeiten in
								einem anspruchsvollen Arbeitsumfeld einzubringen und
								weiterzuentwickeln.
							</p>
						</div>
						<div className="experience">
							<h2>Experience</h2>
							<div>
								<h4>Web-Mediengestalter</h4>
								<h5>
									Siemes Schuhcenter / Mönchengladbach / August 2017 bis Juli
									2019
								</h5>
								<p>
									Eine meiner Hauptaufgaben bestand in der grafischen Gestaltung
									verschiedener Onlineformate wie Newsletter, Banner, Kampagnen
									und Landingpages für den Onlineshop. Ich war auch für die
									Umsetzung dieser Formate mittels HTML und CSS in einem eigenen
									Content-Management-System auf Basis von Bootstrap
									verantwortlich. Darüber hinaus lag mein Verantwortungsbereich
									in der Bildfreigabe und Qualitätssicherung sowie der Pflege
									von Texten und Prospektinhalten im CMS.
								</p>
							</div>
							<div>
								<h4>Junior Webdesigner</h4>
								<h5>
									WFP:2 – TeamWFP / Mönchengladbach / Januar 2011 bis April 2016
								</h5>
								<p>
									Als Mitarbeiter im Bereich der Kreation war ich
									mitverantwortlich für die Konzeption und Gestaltung von
									Online-Kampagnen und Werbemitteln für real,- DRIVE, den real,-
									Online-Shop und die real,- Märkte. Dabei setzte ich meine
									Kenntnisse in HTML und CSS ein, um diese Kampagnen und
									Werbemittel erfolgreich umzusetzen. Zudem war ich zuständig
									für die redaktionelle Pflege und Kontrolle von Texten,
									Angeboten und Artikelbildern in verschiedenen
									Content-Management-Systemen, darunter TYPO3 und Hybris.
								</p>
							</div>
							<div>
								<h4>Selbstständiger Mediengestalter</h4>
								<h5>
									Mediendesign Busch / Hochneukirch / Dezember 2006 bis Mai 2009
								</h5>
								<p>
									Als selbstständiger Mediengestalter habe ich umfassende
									Erfahrung in der Gestaltung von Printmedien gesammelt,
									darunter Logos, Visitenkarten, Briefbögen, Flyer und Plakate.
									Zusätzlich zur Printgestaltung war ich auch für die Gestaltung
									und Umsetzung von kleineren statischen Webseiten mittels HTML
									und CSS verantwortlich. Ein zentraler Bestandteil meiner
									Tätigkeit war der direkte Kundenkontakt, bei dem ich Angebote
									erstellte und eng mit den Kunden zusammenarbeitete, um deren
									Anforderungen zu erfüllen und maßgeschneiderte Lösungen
									anzubieten.
								</p>
							</div>
							<div>
								<h4>Layouter / DTP-Operator</h4>
								<h5>
									WK Werbeagentur / Mönchengladbach / Februar 2005 bis Januar
									2006
								</h5>
								<p>
									Ich war verantwortlich für die Layouterstellung diverser
									Printmedien, von der Konzeption bis zur Druckreife. Meine
									Tätigkeiten umfassten die elektronische Bildbearbeitung,
									einschließlich Composings, Retuschen und Farbkorrekturen mit
									Photoshop, die POS-Gestaltung, sowie die 3D-Visualisierung von
									Verkaufsverpackungen mit Cinema 4D. Zusätzlich habe ich
									eigenverantwortlich den Kundenkontakt gepflegt, angefangen von
									der Auftragsannahme bis hin zur Koordination mit Druckereien.
								</p>
							</div>
						</div>
						<div className="education">
							<h2>Education</h2>
							<div>
								<h4>
									Mediengestalter für Digital- und Printmedien / Fachrichtung
									Mediendesign
								</h4>
								<h5>bbA / Mönchengladbach / Juli 2002 bis Juni 2004</h5>
								<p>
									Inklusive eines 7-monatigen Praktikums in der Werbeagentur
									Felske & Partner in Mönchengladbach.
								</p>
							</div>
						</div>
						<div className="school">
							<h2>School</h2>
							<div>
								<h4>Abendgymnasium</h4>
								<h5>WBK / Viersen / August 2019 bis Juli 2021</h5>
								<p>Abschluss mit Fachhochschulreife.</p>
							</div>
						</div>
					</article>
					<article className="article__contact">
						<picture>
							<source
								srcSet="../src/assets/images/rainer_mobile.png"
								media="(max-width: 790px)"
							/>
							<img src="../src/assets/images/rainer.png" alt="Rainer Busch" />
						</picture>
						<div className="contact">
							<h2>Contact</h2>
							<address>
								<p>
									<FontAwesomeIcon icon={faEnvelope} />
									&nbsp;
									<EmailItem
										href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#114;&#097;&#105;&#110;&#101;&#114;&#046;&#098;&#117;&#115;&#099;&#104;&#051;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
										title={"E-Mail senden"}
									/>
								</p>
								<p>
									<FontAwesomeIcon icon={faPhone} />
									&nbsp;
									<a href="tel:+4917628449855">+49 176 28449855</a>
								</p>
								<p>
									<FontAwesomeIcon icon={faGlobe} />{" "}
									<a href="https://rainer-busch.netlify.app/">
										https://rainer-busch.netlify.app/
									</a>
								</p>
							</address>
						</div>
						<div className="skills">
							<h2>Skills</h2>
							<p>
								<FontAwesomeIcon icon={faHtml5} /> HTML5
							</p>
							<p>
								<FontAwesomeIcon icon={faCss3} /> CSS3
							</p>
							<p>
								<FontAwesomeIcon icon={faSass} /> SASS
							</p>
							<p>
								<FontAwesomeIcon icon={faJs} /> Javascript
							</p>
							<p>
								<FontAwesomeIcon icon={faReact} /> REACT
							</p>
							<p>
								<img
									src="../vite_black.svg"
									alt="vite-logo"
									className="vite-logo"
								/>{" "}
								VITE
							</p>
							<p>
								<FontAwesomeIcon icon={faNpm} /> NPM
							</p>
							<p>
								<FontAwesomeIcon icon={faGithub} /> GITHUB PAGES
							</p>
							<p>
								<FontAwesomeIcon icon={faGit} /> GIT
							</p>
							<p>
								<FontAwesomeIcon icon={faFigma} /> FIGMA
							</p>
							<p>
								<FontAwesomeIcon icon={faWordpress} /> WORDPRESS
							</p>
						</div>
						<div className="courses">
							<h2>Courses</h2>
							<div>
								<h4>Bootcamp</h4>
								<h4>Front-End Web-Entwicklung</h4>
								<h5>Supercode.de / Sep. bis Dez. 2023</h5>
								<p className="gt__lt">Web Development Essentials</p>
								<p className="gt__lt">HTML/CSS</p>
								<p className="gt__lt">Git/GitHub</p>
								<p className="gt__lt">CSS-Preprocessor</p>
								<p className="gt__lt">Javascript</p>
								<p className="gt__lt">REACT</p>
								<p className="gt__lt">API</p>
								<p className="gt__lt">Design & UX</p>
								<p className="gt__lt">FIGMA</p>
								<p className="gt__lt">Project Management Basics</p>
								<p className="gt__lt">Flowcharts</p>
							</div>
							<div>
								<h4>IT und Programmierung</h4>
								<h4>Webdesign</h4>
								<h5>Karriere Tutor / Okt. 2022 bis Mrz. 2023</h5>
								<p className="gt__lt">Webdesign mit WordPress</p>
								<p className="gt__lt">Programmierung mit PYTHON</p>
								<p className="gt__lt">Relationale Datenbanken – SQL/MySQL</p>
							</div>
							<div>
								<h4>Multimedia Marketing</h4>
								<h4>Webprogrammierung</h4>
								<h5>Comcave College / Sep. 2020 bis Jan. 2021</h5>
								<p className="gt__lt">HTML/CSS</p>
								<p className="gt__lt">JavaScript</p>
								<p className="gt__lt">jQuery</p>
								<p className="gt__lt">PHP</p>
							</div>
						</div>
					</article>
				</section>
			</main>
		</div>
	);
};

export default Resume;
