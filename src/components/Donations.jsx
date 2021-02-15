import React from 'react';
import './sass/Donations.scss'

const Donations = ({updateDonations}) => {
	const venmo = '@Gavin-Barrett-4';
	const cashapp = '$GavinABarrett';
	const bitcoin = 'bc1q675dfq5j3vyagn9ue3aenluy2u6xtsrvekwtla';
	return (<div className="donationlinks">
		<div className="payment"><img className='donatelogo' loading='lazy' src='../../dist/cashapplogot.png'/>{cashapp}</div>
		<div className="payment"><img className='donatelogo' loading='lazy' src='../../dist/venmologo.png'/>{venmo}</div>
		<div className="payment"><img className='donatelogo' loading='lazy' src='../../dist/bitcoinlogo.png'/>{bitcoin}</div>
	</div>);
}

export {
	Donations
}
