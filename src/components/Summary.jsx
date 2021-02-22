import React from 'react';
import './sass/Summary.scss'

const Summary = () => {
	const summary = "I am a full stack developer with a passion for designing projects and hardening applications. I started programming six years ago and have since broadened my scope to include front-end design, provisioning Linux servers, and securing web applications. I'm looking to expand my career by creating efficient and professional web applications with next generation defenses. Let me build or break something for you!";
	return (<div id='summary'>
		<p id='summarytextbox'>{summary}</p>
	</div>);
}

export {
	Summary
}
