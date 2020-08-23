import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Skills from './Skills.jsx';
import ProjectCard from './ProjectCard.jsx';
import Footer from './Footer.jsx';
import Emailer from './Emailer';

function Summary() {
	const summary = "I am a full stack developer with a passion for building projects that empower users. I began developing with ReactJS three years ago and have been delighted by its ease of use.";
	return (<div id='summary'>
		<div id='summarytextbox'>
		{summary}
		</div>
	</div>);
}

function Table({emailer, updateEmailer}) {
	
	const organon = <img className='image' src='../dist/organon_demo.gif'/>;
	const exif_god = <img className='image' src='../dist/exif.gif'/>;
	const secretfracture = <img className='image' src='../dist/secret.gif'/>;
	const dndice = <img className='image' src='../dist/dndice.gif'/>;
	const covdash = <img className='image' src='../dist/covidash.gif'/>;
	const protophile = <img className='image' src='../dist/protophile.gif'/>

	const exifdesc = 'Exif God is a simple utility for viewing and removing image metadata.';
	const organondesc = 'Organon is a logic analyzer that determines whether arguments in propositional logic are valid.';
	const secretdesc = 'Secret Fracture is a tool that implements a thresholded secret sharing scheme, encrypting messages into shares.';
	const dndicedesc = 'D&Dice is a tabletop dice rolling application written with the WebGL API.';
	const covidashdesc = 'This is a Covid Data Dashboard for all counties in California.';
	const protophiledesc = 'Protophile is a simple CLI based network analyzer written in Python.';

	return (<div id='portblock'>
	<div className='tabheader'>{'Projects'}</div>
	<div id='table'>
	<ProjectCard project={'CA Covid Dash'} image={covdash} desc={covidashdesc} applink={'covid-data-ca.herokuapp.com'} githublink={'https://github.com/gavinbarrett/CACovidDash'}/>
	<ProjectCard project={'D&Dice'} image={dndice} desc={dndicedesc} applink={'http://d-and-dice.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/DnDice'}/>
	<ProjectCard project={'Exif God'} image={exif_god} desc={exifdesc} applink={'http://exif-god.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/exif_god'}/>
	<ProjectCard project={'Organon'} image={organon} desc={organondesc} applink={'http://organon-engine.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/SL_Engine'}/>
	<ProjectCard project={'Secret Fracture'} image={secretfracture} desc={secretdesc} applink={'http://secret-fracture.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/share-a-byte'}/>
	<ProjectCard project={'ProtoPhile'} image={protophile} desc={protophiledesc} applink={'https://github.com/gavinbarrett/ProtoPhile/'} githublink={'https://github.com/gavinbarrett/ProtoPhile/'}/>
	{emailer ? <Emailer updateEmailer={updateEmailer}/> : ''}
	</div>
	</div>);
}

function Portfolio(props) {
	const [emailer, updateEmailer] = useState(null);

	useEffect(() => {
		// focus on the header after the initial render
		window.scrollTo(0,0);
	}, []);

	return (<div>
	<Header greeting={'Hi, I\'m Gavin. I build and deploy full stack applications.'}/>
	<div id='page'>
		<Summary/>
		<Skills/>
		<Table emailer={emailer} updateEmailer={updateEmailer}/>
		<Footer updateEmailer={updateEmailer}/>
	</div>
	</div>);
}
export default Portfolio;
