import React from 'react';

function ProjectCard(props) {
	return (<div id="projectcard">
		<div id='projecttitle'>{props.project}</div>
		<div id='projectsnippet'>
		<ProjectDescription desc={props.desc}/>
		<ProjectImage image={props.image}/>
		</div>
		<ProjectLinks applink={props.applink} githublink={props.githublink} project={props.project}/>
	</div>);
}

function ProjectDescription(props) {
	return (<div className='desc'>{props.desc}</div>);
}

function ProjectImage(props) {
	return (<div id='projectimage'>{props.image}</div>);
}

function ProjectLinks(props) {
	return (<div className='links'>
		<AppLink applink={props.applink} project={props.project}/>
		<GithubLink githublink={props.githublink}/>
	</div>);
}

function AppLink(props) {
	return (<a className='applink' href={props.applink}>Check out {props.project}</a>);
}

function GithubLink(props) {
	return (<a className='githublink' href={props.githublink}><img className='giticon' src='../dist/GitHub-Mark/PNG/GitHub-Mark-64px.png'/></a>);
}

export {
	ProjectCard
}
