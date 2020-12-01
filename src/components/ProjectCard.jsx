import React from 'react';
import ReactTooltip from 'react-tooltip';
import './sass/ProjectCard.scss';

const ProjectCard = ({applink, githublink, project, image, desc, lang, langdesc, fe, styles}) => {
	return (<div className="projectcard">
		<div className='projecttitle'>{project}</div>
		<div className='projectsnippet'>
		<ProjectDescription desc={desc} applink={applink} githublink={githublink} project={project}/>
		<ProjectImage image={image} lang={lang} langdesc={langdesc} fe={fe} styles={styles}/>
		</div>
	</div>);
}

const ProjectDescription = ({desc, applink, githublink, project}) => {
	return (<div className='desc'>
		<div className="descbox">{desc}</div>
		<div className='links'>
			{applink ? <AppLink applink={applink} project={project}/> : ''}
			{githublink ? <GithubLink githublink={githublink}/> : ''}
		</div>
	</div>);
}

const ProjectImage = ({image, lang, langdesc, fe, styles}) => {
	return (<div className='projectimage'>
		<div className='imagebox'>
			{image}
		</div>
		<ProjectStack lang={lang} langdesc={langdesc} fe={fe} styles={styles}/>
	</div>);
}

const ProjectStack = ({lang, langdesc, fe, styles}) => {
	return (<div className='projectstack'>
		<img className="lang" src={lang} data-tip={langdesc} width="35px" height="35px"/>
		<img className="lang" src={fe} width="45px" height="45px"/>
		{styles ? <img className="lang" src={styles} width="42px" height="42px"/> : ''}
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
