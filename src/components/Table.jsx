import React from 'react';
import { ProjectCard } from './ProjectCard'
import { Donations } from './Donations';
import { Emailer } from './Emailer';
import './sass/Table.scss';


const Table = ({donations, updateDonations}) => {
	
	const organon = <img className='image' src='../../dist/organon_demo.gif'/>;
	const exif_god = <img className='image' src='../../dist/exif.gif'/>;
	const secretfracture = <img className='image' src='../../dist/secret.gif'/>;
	const dndice = <img className='image' src='../../dist/dndice.gif'/>;
	const covdash = <img className='image' src='../../dist/coviddash.png'/>;
	const protophile = <img className='image' src='../../dist/protophile.gif'/>

	const exifdesc = 'Exif God is a simple utility for viewing and removing image metadata.';
	const organondesc = 'Organon is a logic analyzer that determines whether arguments in propositional logic are valid.';
	const secretdesc = 'Secret Fracture is a tool that implements a thresholded secret sharing scheme, encrypting messages into shares.';
	const dndicedesc = 'D&Dice is a tabletop dice rolling application aimed at Dungeons and Dragons campaigns. It is written with Three.js, Cannon.js, and the WebGL API.';
	const covidashdesc = 'This is a Covid-19 data dashboard for all counties in California. It pulls new Covid data from California\'s Open Data Portal every day and processes it with Pandas.';
	const protophiledesc = 'Protophile is a simple CLI based network analyzer written in Python.';
	const makepydesc = 'MakePy is a CLI tool for building Makefiles for C/C++ programs.';
	const conjuredesc = 'Conjure-React is a shell script used for setting up React projects with either Python or Node as a backend.';
	const repeatdesc = 'This is a utility to recover the symmetric key and plaintext of a message encrypted with a two-time pad.';

	const shell = '../../dist/shelllogo.png';
	const node = '../../dist/nodelogo.png';
	const python = '../../dist/pythonlogo.png';
	const react = '../../dist/react.png';
	const sass = '../../dist/sass.png';
	const css = '../../dist/css.png';

	return (<div id='portblock'>
	<div className='tabheader'>{'Projects'}</div>
	<div id='table'>
	<ProjectCard project={'Organon'} image={organon} desc={organondesc} applink={'http://organon-engine.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/SL_Engine'} lang={python} langdesc={'Python3'} fe={react} styles={css}/>
	<ProjectCard project={'CA Covid Dash'} image={covdash} desc={covidashdesc} applink={'https://coviddash.site'} githublink={'https://github.com/gavinbarrett/CACovidDash'} lang={python} langdesc={'Python3'} fe={react} styles={sass}/>
	<ProjectCard project={'D&Dice'} image={dndice} desc={dndicedesc} applink={'https://dndice.site/'} githublink={'https://github.com/gavinbarrett/DnDice'} lang={node} langdesc={'Node.js'} fe={react} styles={css}/>
	<ProjectCard project={'Exif God'} image={exif_god} desc={exifdesc} applink={'http://exif-god.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/exif_god'} lang={python} langdesc={'Python3'} fe={react} styles={css}/>
	<ProjectCard project={'ProtoPhile'} image={protophile} desc={protophiledesc} applink={'https://github.com/gavinbarrett/ProtoPhile/'} githublink={'https://github.com/gavinbarrett/ProtoPhile/'} lang={python} langdesc={'Python3'} fe={shell} styles={null}/>
	</div>
	<div className='tabheader'>Contact Me</div>
	{donations ? <Donations updateDonations={updateDonations}/> : ''}
	<Emailer/>
	</div>);
}

export {
	Table
}
