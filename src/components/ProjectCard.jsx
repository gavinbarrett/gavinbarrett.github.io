import React from 'react';
import ReactTooltip from 'react-tooltip';
import './sass/ProjectCard.scss';

const ProjectCard = ({applink, githublink, project, image, desc, lang, langdesc}) => {
	return (<div id="projectcard">
		<div id='projecttitle'>{project}</div>
		<div id='projectsnippet'>
		<ProjectDescription desc={desc}/>
		<ProjectImage image={image}/>
		</div>
		<ProjectLinks applink={applink} githublink={githublink} project={project} lang={lang} langdesc={langdesc}/>
	</div>);
}

const ProjectDescription = ({desc}) => {
	return (<div className='desc'>{desc}</div>);
}

const ProjectImage = ({image}) => {
	return (<div id='projectimage'>{image}</div>);
}

const ProjectLinks = ({applink, project, githublink, lang, langdesc}) => {
	return (<div className='links'>
		{applink ? <AppLink applink={applink} project={project}/> : ''}
		{githublink ? <GithubLink githublink={githublink}/> : ''}
		<img className="lang" src={lang} data-tip={langdesc} width="35px" height="35px"/>
	</div>);
}

const AppLink = ({applink, project}) => {
	return (<a className='applink' href={applink}>{project} Demo</a>);
}

const GithubLink = ({githublink}) => {
	return (<a className='githublink' href={githublink}><img className='giticon' src='../dist/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus0xEAAC8B.png'/>Code</a>);
}

export {
	ProjectCard
}
