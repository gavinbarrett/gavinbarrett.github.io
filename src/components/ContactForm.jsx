import React from 'react';
import { Emailer } from './Emailer';
import { Footer } from './Footer';
import './sass/ContactForm.scss';

const ContactForm = () => {
	return (<div className="contact">
		<div className="contactform">
			<Emailer/>
		</div>
		<Footer/>
	</div>);	
}

export {
	ContactForm
}
