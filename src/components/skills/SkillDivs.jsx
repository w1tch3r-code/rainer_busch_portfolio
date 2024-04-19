import SkillsItem from "./SkillsItem";

const SkillDivs = () => {
	return (
		<section className="section__skills" id="skills">
			<h2>SKILLS</h2>
			<SkillsItem img={"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"} alt={"HTML5"}/>
			<SkillsItem img={"https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"} alt={"CSS3"} />
			<SkillsItem img={"https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"} alt={"SASS"} />
			<SkillsItem img={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"} alt={"JavaScript"} />
			<SkillsItem img={"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFBe"} alt={"React"} />
			<SkillsItem img={"https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"} alt={"Vite"} />
			<SkillsItem img={"https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"} alt={"NPM"} />
			<SkillsItem img={"https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white"} alt={"GitHubPages"} />
			<SkillsItem img={"https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white"} alt={"Git"} />
			<SkillsItem img={"https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"} alt={"Figma"} />
			<SkillsItem img={"https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white"} alt={"WordPress"} />
		</section>
	);
};

export default SkillDivs;
