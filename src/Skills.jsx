import React from 'react';

function Skill(props) {
	return (<div className='skill'>{props.skill}</div>)
}

function SkillCategory(props) {
	return (<div className='skillcategory'>{props.category}</div>);
}

function SkillCard(props) {
	return (<div className='skillcard'>
		<SkillCategory category={props.category}/>
		<div className='skilllist'>
		{props.skills.map((skill, index) => {
			return <Skill key={index} skill={skill}/>;
		})}
		</div>
	</div>);
}

function Skills() {
	return (<div id='skillcontainer'>
	<div className='tabheader'>{'Skills'}</div>
	<div className='skills'>
	<SkillCard category={'Languages'} skills={['• Python', '• Javascript', '• Typescript', '• Java', '• C/C++', '• SQL', '• HTML5', '• CSS3/SCSS']}/>
	<SkillCard category={'Libraries'} skills={['• ReactJS/JSX','• Express','• Passport','• Flask','• ThreeJS','• CannonJS']}/>
	<SkillCard category={'Build/Development'} skills={['• NPM/Yarn','• Git','• Docker','• Linux/RHEL','• Webpack','• Jest','• Bash/CLI']}/>
	</div>
	</div>);
}

export {
	Skills
}
