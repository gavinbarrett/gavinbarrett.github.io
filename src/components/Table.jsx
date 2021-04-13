import React from 'react';
import { ProjectCard } from './ProjectCard'
import { Emailer } from './Emailer';
import './sass/Table.scss';

export const Table = ({donations, updateDonations}) => {
	// project image/gif paths
	const urandomimg = <img className='image' src='../../dist/urandomblog.png'/>
	const bipsuite = <img className='image' src='../../dist/bipsuite-screen.png'/>
	const organonimg = <img className='image' src='../../dist/organon.png'/>
	const philsource = <img className='image' src='../../dist/philosource-screen.png'/>
	const cryptoconsole = <img className='image' src='../../dist/cryptoconsole-screen.png'/>
	const protoimg = <img className='image' src='../../dist/protophile.png'/>;

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
	const organondesc = 'Organon is a system for assessing the validity of a set of statements in propositional logic.'
	const bipdesc = 'Biptools is an implementation of the BIP32/BIP39 protocol for generating and managing crypto-currency HD wallets.';
	const phildesc = 'PhiloSource is a web archive for philosophical texts that supports document searching and community interaction.';
	const cconsole = 'Crypto Console is a market data dashboard for the hottest crypto-securities. Users can see current prices, price changes, market caps, mined supply percentage, and daily highs and lows for Bitcoin, Ethereum, and other securities. Data is sourced from the CoinGecko API.';
	const protodesc = 'ProtoPhile is a host-based protocol analyzer written in Python. With this tool you can monitor all traffic passing through your host system.';
	const urandomdesc = "This is a personal blog I use to document my growth as a developer and share knowledge and skills I've acquired over the course of my academic and professional career.";

	return (<div id='portblock'>
	<div className='tabheader'>{'Projects'}</div>
	<div id='table'>
	<ProjectCard project={'urandom.blog'} desc={urandomdesc} applink={'https://urandom.blog/'} githublink={'https://github.com/gavinbarrett/urandom.blog'} image={urandomimg} lang={node} langdesc={null} types={typescript} fe={react} styles={sass} db={psql}/>

	<ProjectCard project={'Biptools'} desc={bipdesc} applink={'https://biptools.site/'} githublink={'https://github.com/gavinbarrett/BIP39_Suite/'} image={bipsuite} lang={python} langdesc={'Python3'} types={typescript} fe={react} styles={sass}/>

	<ProjectCard project={'Organon'} desc={organondesc} applink={'https://organon-engine.site'} githublink={'https://github.com/gavinbarrett/SL_Engine'} image={organonimg} lang={python} fe={react} styles={css}/>
	
	<ProjectCard project={'ProtoPhile'} image={protoimg} desc={protodesc} applink={'https://github.com/gavinbarrett/ProtoPhile'} githublink={'https://github.com/gavinbarrett/ProtoPhile'} lang={python} langdesc={'Python3'} types={null} fe={null} styles={null}/>

	<ProjectCard project={'PhiloSource'} image={philsource} desc={phildesc} applink={'https://philosource.site/'} githublink={'https://github.com/gavinbarrett/PhilSource'} lang={node} langdesc={'Node.js'} types={null} fe={react} styles={sass} db={psql}/>

	<ProjectCard project={'Crypto Console'} image={cryptoconsole} desc={cconsole} applink={'https://cryptoconsole.site'} githublink={'https://github.com/gavinbarrett/CryptoCourse'} lang={node} types={typescript} fe={react} styles={sass} db={redis}/>
	</div>
	<div className='tabheader'>Contact Me</div>
	<Emailer/>
	</div>);
}
