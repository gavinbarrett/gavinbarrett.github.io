import React from 'react';
import './sass/Education.scss';

export const Education = () => {
	return (<><div className="tabheader">{"Education"}</div>
	<div className="education-wrapper">
		<div className="edu">
			<p className="edu-header">{"Degrees"}</p>
			<p className="edu-text">
				<p>{"BA in Philosophy + Minor in Comp. Sci."}</p>
				<p>{"University of CA, Davis"}</p>
				<p>{"Received June 11th, 2020"}</p>
			</p>
		</div>
		<div className="edu">
			<p className="edu-header">{"Certifications"}</p>
			<div className="cert-container">
				<p className="edu-cert-text">
					<p className="cert-logo">
						{"CompTIA Security+"}
						<div className="logo-container">
							<img src="../../dist/SecPlusWhite.png"/>
						</div>
					</p>
					<p>{"CompTIA"}</p>
					<p>{"Received March 10th, 2021"}</p>
				</p>
			</div>
		</div>
	</div></>);
}
