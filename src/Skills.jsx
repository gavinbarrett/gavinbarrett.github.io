import React from 'react';
import ReactTooltip from 'react-tooltip';

function Skill({skill, exp}) {
	return (<div className='skill' data-tip={exp}>{skill}</div>)
}

function SkillCategory({category}) {
	return (<div className='skillcategory'>{category}</div>);
}

function SkillCard({skills, exps, category}) {
	return (<div className='skillcard'>
		<SkillCategory category={category}/>
		<div className='skilllist'>
		{skills.map((skill, index) => {
			return <Skill key={index} skill={skill[0]} exp={skill[1]}/>;
		})}
		</div>
	</div>);
}

function Skills() {
	return (<div id='skillcontainer'>
	<div className='tabheader'>{'Skills'}</div>
	<div className='skills'>
	<SkillCard category={'Languages'} skills={[['• Python','5yrs'], ['• Javascript','3yrs'], ['• Typescript','1yr'], ['• Java','4yrs'], ['• C/C++','5yrs'], ['• SQL','1yr'], ['• HTML5','3yrs'], ['• CSS3/SCSS','3yrs']]}/>
	<SkillCard category={'Libraries'} skills={[['• ReactJS/JSX','3yrs'],['• Express','2yrs'],['• Passport','2yrs'],['• Flask','3yrs'],['• ThreeJS','1yr'],['• CannonJS','1yr']]}/>
	<SkillCard category={'Build/Development'} skills={[['• NPM/Yarn','2yrs'],['• Bash/CLI','5yrs'],['• Linux','5yrs'],['• Git','4yrs'],['• Docker','1yr'],['• Webpack','1yr'],['• Postman','1yr']]}/>
	<ReactTooltip className={'tooltip'} backgroundColor={'#355070'} textColor={'#EAAC8B'}/>
	</div>
	</div>);
}

export default Skills;
