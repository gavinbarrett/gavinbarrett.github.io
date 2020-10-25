import React from 'react';
import './sass/Donations.scss'

const Donations = () => {

	const venmo = '@Gavin-Barrett-4';
	const cashapp = '$GavinABarrett';
	const bitcoin = '164nV9ek3FpQRXFPakL6kS9ub4CmvfY2S3';

	return (<div id="donationlinks">
		Venmo: {venmo}
		CashApp: {cashapp}
		Bitcoin: {bitcoin}
	</div>);
}

export {
	Donations
}
