import React, { useState } from 'react';
import './sass/Donations.scss'

const Donations = ({displayed}) => {
	const venmo = '@Gavin-Barrett-4';
	const cashapp = '$GavinABarrett';
	const bitcoin = 'bc1q675dfq5j3vyagn9ue3aenluy2u6xtsrvekwtla';
	const [copyState, updateCopyState] = useState("Copy");
	const revertClipboard = async () => {
		await updateCopyState("Copy");
	}
	const copyToClipboard = async () => {
		// copy bitcoin address to the user's clipboard
		await navigator.clipboard.writeText(bitcoin);
		// notify user the address has been copied
		await updateCopyState("Copied ✓");
		// revert copy button
		setTimeout(revertClipboard, 2000);
	}
	return (<div className={`donationlinks ${displayed}`}>
		<div className="payment"><img className='donatelogo' loading='lazy' src='../../dist/cashapplogot.png'/>{cashapp}</div>
		<div className="payment"><img className='donatelogo' loading='lazy' src='../../dist/venmologo.png'/>{venmo}</div>
		<div className="payment"><img className='donatelogo' loading='lazy' src='../../dist/bitcoinlogo.png'/>
			{bitcoin}
			<div className="clipboard-box" onClick={copyToClipboard}>
				<p className="copy-address">{copyState}</p>
			</div>
		</div>
	</div>);
}

export {
	Donations
}
