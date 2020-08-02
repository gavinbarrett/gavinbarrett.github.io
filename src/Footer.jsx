import React from 'react';

function GithubLink({link}) {
	return (<div id='footerghl'><a href={link}>Github</a></div>);
}

function LinkedInLink({link}) {
	return (<div id='footerlil'><a href={link}>LinkedIn</a></div>);
}

function EmailLink({address, updateEmailer}) {
	return (<div id='footerel' onClick={() => updateEmailer(true)}>Contact Me</div>);
}

export default function Footer({updateEmailer}) {
	return (<div id='footer'>
		<GithubLink link={'https://github.com/gavinbarrett'}/>
		<LinkedInLink link={'https://www.linkedin.com/in/gavin-barrett-3802a9121/'}/>
		<EmailLink address={'gavinbrrtt@gmail.com'} updateEmailer={updateEmailer}/>
	</div>);
}
