import React from 'react';
import TypeWriter from 'react-typewriter';
import './sass/Header.scss';

const Intro = ({greeting}) => {
	return (<div className='name'>
		<TypeWriter typing={1}>{greeting}</TypeWriter>
	</div>);
}

const Header = ({greeting}) => {
	return (<header>
	<div className='header'>
		<Intro greeting={greeting}/>
		<i id='arrow' class="fas fa-chevron-down"/>
	</div>
	</header>);
}

export {
	Header
}
