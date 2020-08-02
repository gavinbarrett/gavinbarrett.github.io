import React from 'react';
import TypeWriter from 'react-typewriter';

function Intro({greeting}) {
	return (<div id='name'>
		<TypeWriter typing={1}>{greeting}</TypeWriter>
	</div>);
}

export default function Header({greeting}) {
	return (<div id='header'>
		<Intro greeting={greeting}/>
		<i id='arrow' class="fas fa-chevron-down"/>
	</div>);
}
