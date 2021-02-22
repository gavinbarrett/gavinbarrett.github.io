import React, { useEffect, useState } from 'react';
import { Donations } from './Donations';
import './sass/Footer.scss';

const HomeLink = () => {
	// scroll to the top smoothly
	return (<p className="home" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
		Home
		<img className='homeicon' src='../dist/home.png'/>
	</p>);
}

const GithubLink = ({link}) => {
	return (<div className='footerghl'><a className='footerlink' href={link}>
	GitHub
	<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e56b6f" fill="none" stroke-linecap="round" stroke-linejoin="round">
  	<path stroke="none" d="M0 0h24v24H0z"/>
  	<path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
</svg>
	</a></div>);
}

const LinkedInLink = ({link}) => {
	return (<div className='footerlil'><a className='footerlink' href={link}>
	Linked
	<img className='footerlinkedicon' src='../dist/linkedcolor.png'/>
	</a></div>);
}

const DonateLink = () => {
	const [displayed, updateDisplayed] = useState("");
	const toggleOn = () => {
		if (displayed === "")
			updateDisplayed("displayed")
	}
	const toggleOff = () => {
		if (displayed === "displayed")
			updateDisplayed("")
	}
	return (<p id='dl' className='footerdl' onMouseEnter={toggleOn} onMouseLeave={toggleOff}>
		<Donations displayed={displayed}/>
		Donate
		<img className='footerdonate' src='../dist/money.png'/>
	</p>);
}

const EmailLink = ({address, history}) => {
	return (<div className='footerel' onClick={() => history.push('/contact') }>
	Contact Me
	<svg id='footermailicon' xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-mail' viewBox='0 0 24 24' stroke-width="1.5" stroke="#e56b6f" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
	</div>);
}

const Footer = ({updateDonations}) => {
	return (<footer>
	<div className='footer'>
		<HomeLink/>
		<GithubLink link={'https://github.com/gavinbarrett'}/>
		<LinkedInLink link={'https://www.linkedin.com/in/gavin-barrett-3802a9121/'}/>
		<DonateLink/>
	</div>
	</footer>);
}

export {
	Footer
}
