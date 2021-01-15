import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Summary } from './Summary';
import { Skills } from './Skills';
import { Table } from './Table';
import { Stack } from './Stack';
import { Footer } from './Footer';
import './sass/Portfolio.scss';

const Portfolio = (props) => {
	
	const [emailer, updateEmailer] = useState(null);
	const [donations, updateDonations] = useState(null);

	useEffect(() => {
		// focus on the header after the initial render
		window.scrollTo(0,0);
	}, []);

	return (<div>
	<Header greeting={'Hi, I\'m Gavin! I build and deploy full stack applications.'}/>
	<div id='page'>
		<Summary/>
		<Skills/>
		<Table donations={donations} updateDonations={updateDonations}/>
		<Footer updateDonations={updateDonations}/>
	</div>
	</div>);
}

export {
	Portfolio
}
