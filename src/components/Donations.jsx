import React, { useEffect } from 'react';
import { Footer } from './Footer';
import './sass/Donations.scss'

const Donations = ({updateDonations}) => {

	const venmo = '@Gavin-Barrett-4';
	const cashapp = '$GavinABarrett';
	const bitcoin = 'address';

	useEffect(() => {
		// add event listener for mouseleave
		const dc = document.getElementById('dc');
		dc.addEventListener('mouseleave', updateDonations(false));
	}, []);

	const hide = () => {
		updateDonations(false);
		const dc = document.getElementById('dc');
		dc.removeEventListener('mouseleave', updateDonations(false));
		const dl = document.getElementById('dl');
		dl.addEventListener('mouseenter', updateDonations(true));
	}

	const copyPubkey = async () => {
		// copy Bitcoin pubkey into the user's clipboard
		await navigator.clipboard.writeText(bitcoin);
	}

	return (<div className="donations">
	<div id='dc' className='donationcontainer'>
	<div className="donationlinks">
		<div className="payment"><img className='donatelogo' src='../../dist/venmologo.png'/>{venmo}</div>
		<div className="payment"><img className='donatelogo' src='../../dist/cashapplogo.png'/>{cashapp}</div>
		<div className="payment"><img className='donatelogo' src='../../dist/bitcoinlogo.png'/>{bitcoin}<div className='copykey' onClick={copyPubkey}>Copy Key <img className='clipboard' src='../../dist/clipboard_e56b6f_4.png'/></div></div>
		<div><a className='gpglink' href='../../dist/pubkey.asc' download><img className='gpgkey' src='../../dist/keylogo_e56b6f.png'/>GPG Key</a></div>
	</div>
	</div>
	</div>);
}

export {
	Donations
}
