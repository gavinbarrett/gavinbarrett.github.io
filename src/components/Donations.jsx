import React from 'react';
import { Footer } from './Footer';
import './sass/Donations.scss'

const Donations = () => {

	const venmo = '@Gavin-Barrett-4';
	const cashapp = '$GavinABarrett';
	const bitcoin = 'xpub6CsfdyCVnEd9ZvhUkhQvfT7U1pm8oha3aqzdwNPkTM1hizninUt5Qytdq8hz7W28YrWyffdStkRgxVGQXGBT5Hcxf7zvw26XK4vB5vQuxdD';

	return (<div className="donations">
	<div className="donationlinks">
		<p className="payment">Venmo: {venmo}</p>
		<p className="payment">CashApp: {cashapp}</p>
		<p className="payment">Bitcoin: {bitcoin}</p>
	</div>
	</div>);
}

export {
	Donations
}
