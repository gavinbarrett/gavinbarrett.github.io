import React from 'react';
import { Footer } from './Footer';
import './sass/Donations.scss'

const Donations = () => {

	const venmo = '@Gavin-Barrett-4';
	const cashapp = '$GavinABarrett';
	const bitcoin = '164nV9ek3FpQRXFPakL6kS9ub4CmvfY2S3';

	return (<div className="donations">
	<div className="donationlinks">
		<p className="payment">Venmo: {venmo}</p>
		<p className="payment">CashApp: {cashapp}</p>
		<p className="payment">Bitcoin: {bitcoin}</p>
	</div>
	<Footer/>
	</div>);
}

export {
	Donations
}
