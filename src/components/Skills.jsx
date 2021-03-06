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

export const Skills = () => {
	return (<><div className='tabheader'>{'Skills'}</div>
	<div className='skills'>
	<SkillCard category={'Languages'} skills={[['• Python','5yrs'], ['• JS/TS/ES6','3yrs'], ['• C/C++','5yrs'], ['• SQL','2yr'], ['• Bash', '5yrs'], ['• HTML5','3yrs'], ['• CSS3/SCSS','3yrs']]}/>
	<SkillCard category={'Libraries'} skills={[['• React','3yrs'], ['• Express','2yrs'], ['• Flask','2yrs'] , ['• Pandas', '1yr'], ['• WebSockets', '1yr']]}/>
	{/*<SkillCard category={'Development'} skills={[['• Linux','5yrs'], ['• Git','4yrs'], ['• NPM','2yrs'], ['• Figma', '1yr'], ['• Nginx','1yr'], ['• Webpack','1yr'], ['• Docker', '1yr'], ['• OWASP ZAP', '1yr']]}/>*/}
	{/*<SkillCard category={'Deployment'} skills={[['• AWS/GCP/Linode','2yrs'], ['• Docker','1yr'], ['• Nginx','1yr']]}/>*/}
	<SkillCard category={'Development'} skills={[['• Linux','5yrs'], ['• Git','4yrs'], ['• AWS/GCP'], ['• NPM','2yrs'], ['• Nginx','1yr'], ['• Webpack','1yr'], ['• Docker', '1yr'], ['• OWASP ZAP', '1yr']]}/>
	</div></>);
}
