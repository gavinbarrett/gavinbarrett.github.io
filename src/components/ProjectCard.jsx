import React from 'react'
import { Carousel } from './Carousel';
import './sass/ProjectCard.scss';

export const ProjectCard = ({applink, githublink, project, images, set, genidx, desc, lang, langdesc, types, fe, styles, db}) => {
	{/* compose a concise description of a project */}
	return (<div className="projectcard">
		<div className='projecttitle'>{project}</div>
		<div className='projectsnippet'>
		<ProjectDescription desc={desc} applink={applink} githublink={githublink} project={project}/>
		<ProjectImage images={images} set={set} genidx={genidx} lang={lang} langdesc={langdesc} fe={fe} types={types} styles={styles} db={db}/>
		</div>
	</div>);
}

const ProjectDescription = ({desc, applink, githublink, project}) => {
	{/* describe the project's purpose and any novel qualities; link to the application and its source code */}
	return (<div className='desc'>
		<p className="descbox">{desc}</p>
		<div className='links'>
			{applink ? <AppLink applink={applink} project={project}/> : ''}
			{githublink ? <GithubLink githublink={githublink}/> : ''}
		</div>
	</div>);
}

const ProjectImage = ({images, set, genidx, lang, langdesc, types, fe, styles, db}) => {
	{/* display an image/gif of the project and display the project's tech stack */}
	return (<div className='projectimage'>
		<Carousel images={images} set={set} genidx={genidx}/>
		{/*<div className='imagebox'>
			{image}
		</div>*/}
		<ProjectStack lang={lang} langdesc={langdesc} types={types} fe={fe} styles={styles} db={db}/>
	</div>);
}

const ProjectStack = ({lang, langdesc, types, fe, styles, db}) => {
	{/* display an array of technologies used to create the project */}
	return (<div className='projectstack'>
		<div className="lang-container">
			{/* back end language for project */}
			<img className="lang" src={lang}/>
		</div>
		{fe ? (<div className="lang-container">
			{/* front end for project (React) */}
			<img className="lang" src={fe}/></div>) : ''}
		{types ? (<div className="lang-container">
			{/* front end for project (Typescript) */}
			<img className="lang" src={types}/></div>) : ''}
		{styles ? (<div className="lang-container">
			{/* styling option for project (CSS3/SCSS) */}
			<img className="lang" src={styles}/></div>) : ''}
		{db ? (<div className="lang-container">
			{/* database system */}
			<img className="lang" src={db}/></div>) : ''}
	</div>);
}

const AppLink = ({applink, project}) => {
	{/* link to deployed application; if it isn't deployed we link to the source code */}
	return (<a className='applink' href={applink}>{project} Demo</a>);
}

const GithubLink = ({githublink}) => {
	{/* link to each projects' source code */}
	return (<a className='githublink' href={githublink}><img className='giticon' src='../dist/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus0xEAAC8B.png'/>Code</a>);
}
