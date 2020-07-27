import React from 'react';
import { Header } from './Header.jsx';
import { ProjectCard } from './ProjectCard.jsx';

function Summary() {
	const summary = "I am a full stack developer with a passion for building projects that empower users.";
	return (<div id='summary'>
		{summary}
	</div>);
}

function Table() {
	
	const organon = <img className='image' src='../dist/organon.gif'/>;
	const exif_god = <img className='image' src='../dist/exif.gif'/>
	const secretfracture = <img className='image' src='../dist/secret.gif'/>
	const dndice = <img className='image' src='../dist/dndice.gif'/>

	const exifdesc = 'Exif God is a simple utility for viewing image metadata.';
	const organondesc = 'Organon is a logic analyzer that determines whether arguments in propositional logic are valid.';
	const secretdesc = 'Secret Fracture is a tool that implements a thresholded secret sharing scheme. This can be used for encrypting private keys and passwords among multiple parties.';
	const dndicedesc = 'D&Dice is a tabletop dice rolling application written with the WebGL API.';

	return (<div id='table'>
	<ProjectCard project={'D&Dice'} image={dndice} desc={dndicedesc} applink={'http://d-and-dice.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/DnDice'}/>
	<ProjectCard project={'Exif God'} image={exif_god} desc={exifdesc} applink={'http://exif-god.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/exif_god'}/>
	<ProjectCard project={'Organon'} image={organon} desc={organondesc} applink={'http://organon-engine.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/SL_Engine'}/>
	<ProjectCard project={'Secret Fracture'} image={secretfracture} desc={secretdesc} applink={'http://secret-fracture.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/share-a-byte'}/>
	</div>);
}

function Portfolio(props) {
	return (<div>
	<Header/>
	<div id='page'>
		<Summary/>
		<Table/>
	</div>
	</div>);
}

export {
	Portfolio
}
