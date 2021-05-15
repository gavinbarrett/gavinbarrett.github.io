import React, { useState } from 'react';
import './sass/Donations.scss'

export const Donations = ({displayed}) => {
	const venmo = '@Gavin-Barrett-4';
	const cashapp = '$GavinABarrett';
	const bitcoin = '3J9nH7hYiodP6xX1eTkYwd3KJuM3hfvRph';
	const algo = '2LG3OYODNOER2KB4OQ7DTUEZD3AENEV2BESE3R7J7VEH2CDMANYJRPXR5M';
	const xlm = 'GDPONGJGI7DMGRNA3EHLL2XB3P4L6BMS5JXGXTZSOKYQQ3NXAI47STRF';
	const ada = 'addr1q8rd14dety86d0awqj65kcnn2mrgcv8vnhtj1yw3yy3t2fy9vumw70p5csamzacf1w6pddxd91xvmtx6yh3f4mqza2usxdkrmu';
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
		<div className="payment"><img className='donatelogo' src='../../dist/cashapplogot.png'/>{cashapp}</div>
		<div className="payment"><img className='donatelogo' src='../../dist/venmologo.png'/>{venmo}</div>
		<p className="crypto-disclaimer">
			{"If you'd like to send me cryptocurrency, I'd really appreciate some energy-efficient, PoS crypto! I'm a big fan of both ALGO and XLM."}
		</p>
		<div className="payment"><img className="donatelogo" src="../../dist/algologo.png"/>
			{algo}
			<div className="clipboard-box" onClick={copyToClipboard}>
				<p className="copy-address">{copyState}</p>
			</div>
		</div>
		<div className="payment"><img className="donatelogo" src="../../dist/xlmlogo.png"/>
			{xlm}
			<div className="clipboard-box" onClick={copyToClipboard}>
				<p className="copy-address">{copyState}</p>
			</div>
		</div>
	</div>);
}
