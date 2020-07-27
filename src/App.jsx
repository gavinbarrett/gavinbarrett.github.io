import React from 'react';
import ReactDOM from 'react-dom';

function Name(props) {
	return (<div id='name'>
		{props.name}
	</div>);
}

function ProfilePic() {
	return (<img id='profile' src='../dist/profile.jpg'/>);
}

function Header() {
	return (<div id='header'>
		<Name name={'Gavin Barrett'}/>
		<ProfilePic/>
	</div>);
}

function Summary() {
	const summary = "I am a full stack developer with a passion for building projects that empower users.";
	return (<div id='summary'>
		{summary}
	</div>);
}

function ProjectImage(props) {
	return (<div id='projectimage'>{props.image}</div>);
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

function Page(props) {
	return (<div id='page'>
		<Summary/>
		<Table/>
	</div>);
}

function ProjectDescription(props) {
	return (<div className='desc'>{props.desc}</div>);
}

function GithubLink(props) {
	return (<a className='githublink' href={props.githublink}>Check out the code <img className='giticon' src='../dist/GitHub-Mark/PNG/GitHub-Mark-64px.png'/></a>);
}

function AppLink(props) {
	return (<a className='applink' href={props.applink}>Check out {props.project}</a>);
}

function ProjectLinks(props) {
	return (<div className='links'>
		<AppLink applink={props.applink} project={props.project}/>
		<GithubLink githublink={props.githublink}/>
	</div>);
}

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

function App(props) {
	return(<div>
		<Header/>
		<Page/>
	</div>);
}

ReactDOM.render(<App message={"This is a React app!"}/>, document.getElementById('root'));
