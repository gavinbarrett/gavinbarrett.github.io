import React from 'react';

function ProjectCard({applink, githublink, project, image, desc}) {
	return (<div id="projectcard">
		<div id='projecttitle'>{project}</div>
		<div id='projectsnippet'>
		<ProjectDescription desc={desc}/>
		<ProjectImage image={image}/>
		</div>
		<ProjectLinks applink={applink} githublink={githublink} project={project}/>
	</div>);
}

function ProjectDescription({desc}) {
	return (<div className='desc'>{desc}</div>);
}

function ProjectImage({image}) {
	return (<div id='projectimage'>{image}</div>);
}

function ProjectLinks({applink, project, githublink}) {
	return (<div className='links'>
		{applink ? <AppLink applink={applink} project={project}/> : ''}
		{githublink ? <GithubLink githublink={githublink}/> : ''}
	</div>);
}

function AppLink({applink, project}) {
	return (<a className='applink' href={applink}>Check out {project}</a>);
}

function GithubLink({githublink}) {
	return (<a className='githublink' href={githublink}><img className='giticon' src='../dist/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus0xEAAC8B.png'/></a>);
}

export default ProjectCard;
