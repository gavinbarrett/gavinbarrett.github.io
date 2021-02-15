import React from 'react';
import './sass/Skills.scss';

const Skill = ({skill, exp}) => {
	return (<div className='skill' title={exp}>{skill}</div>)
}

const SkillCategory = ({category}) => {
	return (<div className='skillcategory'>{category}</div>);
}

const SkillCard = ({skills, exps, category}) => {
	return (<div className='skillcard'>
		<SkillCategory category={category}/>
		<div className='skilllist'>
		{skills.map((skill, index) => {
			return <Skill key={index} skill={skill[0]} exp={skill[1]}/>;
		})}
		</div>
	</div>);
}

const Skills = () => {
	return (<><div className='tabheader'>{'Skills'}</div>
	<div className='skills'>
	<SkillCard category={'Languages'} skills={[['• Python','5yrs'], ['• Typescript','1yrs'], ['• Javascript','3yrs'], ['• Java','3yrs'], ['• C/C++','5yrs'], ['• SQL','2yr'], ['• HTML5','3yrs'], ['• CSS3/SCSS','3yrs']]}/>
	<SkillCard category={'Libraries'} skills={[['• React','3yrs'],['• React-Router','1yr'],['• Express','2yrs'],['• Passport','2yrs'],['• Scikit-Learn','1yr'],['• Socket.io', '1yr'],['• Flask','2yrs'],['• ThreeJS','1yr']]}/>
	<SkillCard category={'Build/Development'} skills={[['• NPM/Yarn','2yrs'],['• Bash/CLI','5yrs'],['• Linux','5yrs'],['• Git','4yrs'],['• Nginx','1yr'],['• Docker','1yr'],['• Webpack','1yr'],['• Jest','1yr']]}/>
	</div></>);
}

export {
	Skills
}
