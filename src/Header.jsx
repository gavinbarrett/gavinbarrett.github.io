import React from 'react';
import TypeWriter from 'react-typewriter';

function Intro(props) {
	return (<div id='name'>
		<TypeWriter typing={1}>{props.greeting}</TypeWriter>
	</div>);
}

function Header(props) {
	return (<div id='header' autofocus>
		<Intro greeting={props.greeting}/>
		<i id='arrow' class="fas fa-chevron-down"/>
	</div>);
}

export {
	Header
}
