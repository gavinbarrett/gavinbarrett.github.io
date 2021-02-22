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
		<Intro greeting={greeting}/>
		<div className='arrowcontainer'>
			<i class="fas fa-chevron-down arrow"/>
		</div>
	</header>);
}

export {
	Header
}
