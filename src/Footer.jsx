import React from 'react';

function GithubLink({link}) {
	return (<div id='footerghl'><a href={link}>
	GitHub
	<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e56b6f" fill="none" stroke-linecap="round" stroke-linejoin="round">
  	<path stroke="none" d="M0 0h24v24H0z"/>
  	<path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
</svg>
	</a></div>);
}

function LinkedInLink({link}) {
	return (<div id='footerlil'><a href={link}>
	Linked
	<img id='footerlinkedicon' src='../dist/linkedcolor.png'/>
	</a></div>);
}

function EmailLink({address, updateEmailer}) {
	return (<div id='footerel' onClick={() => updateEmailer(true)}>
	Contact Me
	<svg id='footermailicon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e56b6f" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
	</div>);
}

export default function Footer({updateEmailer}) {
	return (<div id='footer'>
		<GithubLink link={'https://github.com/gavinbarrett'}/>
		<LinkedInLink link={'https://www.linkedin.com/in/gavin-barrett-3802a9121/'}/>
		<EmailLink address={'gavinbrrtt@gmail.com'} updateEmailer={updateEmailer}/>
	</div>);
}
