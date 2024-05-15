import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Forwarding from '../svg/Forwarding';
import ArticleItem from './ArticleItem';

const ArticleList = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
			partialVisibilityGutter: 40,
		},
		tablet: {
			breakpoint: { max: 1024, min: 576 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
			partialVisibilityGutter: 30,
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
			partialVisibilityGutter: 30,
		},
	};

	return (
		<section className="section__projects" id="projects">
			<h2>PROJECTS</h2>
			<Carousel
				swipeable={true}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				// autoPlay={this.props.deviceType !== "mobile" ? true : false}
				// autoPlaySpeed={1000}
				keyBoardControl={true}
				// customTransition="all .5"
				// transitionDuration={500}
				// containerClass="carousel-container"
				containerClass="container-with-dots"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				// deviceType={this.props.deviceType}
				deviceType={'desktop'}
				dotListClass="custom-dot-list-style"
				// itemClass="carousel-item-padding-40-px"
				itemClass="image-item">
				<article>
					<h3>Project Eine Reise ins Weltall</h3>
					<p>
						Bei dieser responsiven Wordpress-Seite handelt es sich um das
						Abschlussprojekt einer 2-monatigen WordPress-Weiterbildung.
					</p>
					<div className="skills">
						<p>WordPress • HTML • CSS</p>
					</div>
					<div className="project__links__wrapper">
						<a
							href="https://eine-reise-ins-weltall.de"
							target="_blank"
							rel="noreferrer">
							<Forwarding />
						</a>
					</div>
				</article>
				<ArticleItem
					title={'Project California Calling'}
					description={
						'Bei dieser responsiven Single-Page-Website handelt es sich um das Abschlussprojekt eines Coding Bootcamps des HTML- und (S)CSS-Moduls.'
					}
					skills={'HTML • SCSS'}
					githubUrl={
						'https://github.com/w1tch3r-code/project_california_calling'
					}
					liveUrl={'https://w1tch3r-code.github.io/project_california_calling/'}
				/>
				<ArticleItem
					title={'Project Score Keeper'}
					description={
						"Bei diesem JavaScript-Projekt handelt es sich um einen 'Score-Keeper', der es ermöglicht, den aktuellen Spielstand eines Basketballspiels anzuzeigen und vorab in einem Overlay die Teamnamen einzugeben."
					}
					skills={'HTML • CSS • JavaScript'}
					githubUrl={
						'https://github.com/w1tch3r-code/arrow_functions/tree/main/js_project_score_keeper'
					}
					liveUrl={
						'https://w1tch3r-code.github.io/arrow_functions/js_project_score_keeper/'
					}
				/>
				<ArticleItem
					title={'Project Multiple Calculator'}
					description={
						"Bei diesem JavaScript-Projekt handelt es sich um einen 'Multiple Calculator', der 3 versch. Rechner beinhaltet. Einen Idealgewichts-Rechner, einen Kalorien-Rechner und einen Mehrwertsteuer-Rechner."
					}
					skills={'HTML • CSS • JavaScript'}
					githubUrl={'https://github.com/w1tch3r-code/js_multiple_calculator'}
					liveUrl={'https://w1tch3r-code.github.io/js_multiple_calculator/'}
				/>
				<ArticleItem
					title={'Project Movie DB I'}
					description={
						'Bei diesem JavaScript-Projekt handelt es sich um eine Movie-Datenbank, bei der die Filme aus einem Array beim Laden der Seite angezeigt werden. Die Suche nach Filmen und Filtermöglichkeiten wurden programmiert.'
					}
					skills={'HTML • CSS • JavaScript'}
					githubUrl={'https://github.com/w1tch3r-code/js_movie_db'}
					liveUrl={'https://w1tch3r-code.github.io/js_movie_db/'}
				/>
				<ArticleItem
					title={'Project Beer API'}
					description={
						'Bei diesem REACT-Projekt handelt es sich um eine Bier-Website in einer Mobile-Ansicht, bei der die Bier-Produkte per API gefetcht werden.'
					}
					skills={'JavaScript • React • SCSS'}
					githubUrl={'https://github.com/w1tch3r-code/reactjs_beer_api'}
					liveUrl={'https://reactjs-beer-api-rainer-busch.netlify.app'}
				/>
				<ArticleItem
					title={'Project Movie DB II'}
					description={
						'Bei diesem Projekt handelt es sich um die gleiche Movie-Datenbank wie zuvor, nur dieses Mal mit React umgesetzt. Die Filme werden jetzt aus einer JSON-Datei geladen und es gibt weitere Filtermöglichkeiten.'
					}
					skills={'JavaScript • React • SCSS'}
					githubUrl={'https://github.com/w1tch3r-code/reactjs_movie_db'}
					liveUrl={'https://reactjs-movie-db-rainer-busch.netlify.app/'}
				/>
			</Carousel>
		</section>
	);
};

export default ArticleList;
