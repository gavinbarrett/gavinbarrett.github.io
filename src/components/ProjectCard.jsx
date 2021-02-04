import React from 'react'
import ReactTooltip from 'react-tooltip';
import './sass/ProjectCard.scss';

const ProjectCard = ({applink, githublink, project, image, desc, lang, langdesc, fe, styles, db}) => {
	{/* compose a concise description of a project */}
	return (<div className="projectcard">
		<div className='projecttitle'>{project}</div>
		<div className='projectsnippet'>
		<ProjectDescription desc={desc} applink={applink} githublink={githublink} project={project}/>
		<ProjectImage image={image} lang={lang} langdesc={langdesc} fe={fe} styles={styles} db={db}/>
		</div>
	</div>);
}

const ProjectDescription = ({desc, applink, githublink, project}) => {
	{/* describe the project's purpose and any novel qualities; link to the application and its source code */}
	return (<div className='desc'>
		<div className="descbox">{desc}</div>
		<div className='links'>
			{applink ? <AppLink applink={applink} project={project}/> : ''}
			{githublink ? <GithubLink githublink={githublink}/> : ''}
		</div>
	</div>);
}

const ProjectImage = ({image, lang, langdesc, fe, styles, db}) => {
	{/* display an image/gif of the project and display the project's tech stack */}
	return (<div className='projectimage'>
		<div className='imagebox'>
			{image}
		</div>
		<ProjectStack lang={lang} langdesc={langdesc} fe={fe} styles={styles} db={db}/>
	</div>);
}

const ProjectStack = ({lang, langdesc, fe, styles, db}) => {
	{/* display an array of technologies used to create the project */}
	return (<div className='projectstack'>
		{/* back end language for project */}
		<img className="lang" src={lang} data-tip={langdesc} loading='lazy' width="35px" height="35px"/>
		{/* front end for project (React) */}
		{fe ? <img className="lang" src={fe} loading='lazy' width="48px" height="48px"/> : ''}
		{/* styling option for project (CSS3/SCSS) */}
		{styles ? <img className="lang" src={styles} loading='lazy' width="42px" height="42px"/> : ''}
		{/* database system */}
		{db ? <img className="lang" src={db} data-tip={langdesc} loading='lazy' width="50px" height="50px"/> : ''}
	</div>);
}

const AppLink = ({applink, project}) => {
	{/* link to deployed application; if it isn't deployed we link to the source code */}
	return (<a className='applink' href={applink}>{project} Demo</a>);
}

const GithubLink = ({githublink}) => {
	{/* link to each projects' source code */}
	return (<a className='githublink' href={githublink}><img className='giticon' loading='lazy' src='../dist/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus0xEAAC8B.png'/>Code</a>);
}

export {
	ProjectCard
}
