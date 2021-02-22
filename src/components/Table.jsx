import React from 'react';
import { ProjectCard } from './ProjectCard'
import { Emailer } from './Emailer';
import './sass/Table.scss';

const Table = ({donations, updateDonations}) => {
	// project image/gif paths
	const exif_god = <img className='image' src='../../dist/exifgod-screen.png'/>;
	const covdash = <img className='image' src='../../dist/coviddash-screen.png'/>;
	const bipsuite = <img className='image' src='../../dist/bipsuite-screen.png'/>
	const philsource = <img className='image' src='../../dist/philosource-screen.png'/>
	const cryptoconsole = <img className='image' src='../../dist/cryptoconsole-screen.png'/>
	const organon = <img className='image' src='../../dist/organon-screen.png'/>;

	// stack logo paths
	const shell = '../../dist/shelllogo.png';
	const cli = '../../dist/clilogo.png';
	const node = '../../dist/nodelogo.png';
	const python = '../../dist/pythonlogo.png';
	const react = '../../dist/react-logo.png';
	const sass = '../../dist/sass.png';
	const css = '../../dist/css.png';
	const psql = '../../dist/post.png';
	const redis = '../../dist/redis.png';
	const typescript = '../../dist/typescript-logo.png';

	// project descriptions
	const exifdesc = 'Exif God is a simple utility for viewing and removing image metadata.';
	const organondesc = 'Organon is a logic analyzer that determines whether arguments in propositional logic are valid.';
	const covidashdesc = 'This is a Covid-19 data dashboard for all counties in California. It pulls Covid data daily from California\'s Open Data Portal and processes it with Pandas.';
	const bipdesc = 'Bip Suite is an implementation of the BIP32/BIP39 protocol for generating and managing crypto-currency HD wallets.';
	const phildesc = 'PhiloSource is a web archive for philosophical texts that supports document searching and community interaction.';
	const cconsole = 'Crypto Console is a market data dashboard for the hottest crypto-securities. Users can see current prices, price changes, market caps, mined supply percentage, and daily highs and lows for Bitcoin, Ethereum, and other securities. Data is sourced from the CoinGecko API.';

	return (<div id='portblock'>
	<div className='tabheader'>{'Projects'}</div>
	<div id='table'>
	<ProjectCard project={'PhiloSource'} image={philsource} desc={phildesc} applink={'https://github.com/gavinbarrett/PhilSource'} githublink={'https://github.com/gavinbarrett/PhilSource'} lang={node} langdesc={'Node.js'} types={null} fe={react} styles={sass} db={psql}/>

	<ProjectCard project={'Bip Suite'} desc={bipdesc} applink={'https://github.com/gavinbarrett/BIP39_Suite/'} githublink={'https://github.com/gavinbarrett/BIP39_Suite/'} image={bipsuite} lang={python} langdesc={'Python3'} types={typescript} fe={react} styles={sass}/>

	<ProjectCard project={'CA Covid Dash'} image={covdash} desc={covidashdesc} applink={'https://coviddash.site'} githublink={'https://github.com/gavinbarrett/CACovidDash'} lang={python} langdesc={'Python3'} types={null} fe={react} styles={sass} db={redis}/>

	<ProjectCard project={'Exif God'} image={exif_god} desc={exifdesc} applink={'http://exif-god.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/exif_god'} lang={python} langdesc={'Python3'} types={null} fe={react} styles={css}/>
	
	<ProjectCard project={'Crypto Console'} image={cryptoconsole} desc={cconsole} applink={'https://cryptoconsole.site'} githublink={'https://github.com/gavinbarrett/CryptoCourse'} lang={node} types={typescript} fe={react} styles={sass} db={redis}/>

	<ProjectCard project={'Organon'} image={organon} desc={organondesc} applink={'http://organon-engine.herokuapp.com/'} githublink={'https://github.com/gavinbarrett/SL_Engine'} lang={python} langdesc={'Python3'} types={null} fe={react} styles={css}/>

	</div>
	<div className='tabheader'>Contact Me</div>
	<Emailer/>
	</div>);
}

export {
	Table
}
