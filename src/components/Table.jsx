import React from 'react';
import { ProjectCard } from './ProjectCard'
import { Emailer } from './Emailer';
import './sass/Table.scss';

export const Table = () => {
	// project image/gif paths
	const urandomimg = <img className='image' src='../../dist/urandomblog.png'/>
	const bipsuite = <img className='image' src='../../dist/bt_demo.png'/>
	const organonimg = <img className='image' src='../../dist/organon.png'/>
	const philsource = <img className='image' src='../../dist/philosource-screen.png'/>
	const cryptoconsole = <img className='image' src='../../dist/cc_demo.png'/>
	const protoimg = <img className='image' src='../../dist/protophile.png'/>;
	//const tunnelrimg = <img className='image' src='../../dist/tunnelr.png'/>
	//const tunnelrimg2 = <img className='image'
	const tunnelr1 = '../../dist/tunnelr.png';
	const tunnelr2 = '../../dist/tunnelr2.png';
	const urandom1 = '../../dist/urandompic1.png';
	const urandom2 = '../../dist/urandompic2.png';
	const urandom3 = '../../dist/urandompic3.png';

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
	const tunnelrdesc = 'Tunnelr is a real time chat application that supports private and public rooms.';

	return (<div id='portblock'>
	<div className='tabheader'>{'Projects'}</div>
	<div id='table'>
	<ProjectCard project={'Tunnelr Messenger'} desc={tunnelrdesc} applink={'https://tunnelr.site'} githublink={'https://github.com/gavinbarrett/Tunnelr/'} images={[tunnelr1, tunnelr2]} set={0} genidx={0} lang={node} langdesc={'Node.js'} types={typescript} fe={react} styles={sass} db={psql}/>
	
	<ProjectCard project={'urandom.blog'} desc={urandomdesc} applink={'https://urandom.blog/'} githublink={'https://github.com/gavinbarrett/urandom.blog'} images={[urandom1, urandom2, urandom3]} set={1} genidx={2} lang={node} langdesc={null} types={typescript} fe={react} styles={sass} db={psql}/>

	<ProjectCard project={'Crypto Console'} images={null} desc={cconsole} applink={'https://cryptoconsole.site'} githublink={'https://github.com/gavinbarrett/CryptoConsole'} lang={node} types={typescript} fe={react} styles={sass} db={redis}/>
	
	<ProjectCard project={'PhiloSource'} images={null} desc={phildesc} applink={'https://philosource.site/'} githublink={'https://github.com/gavinbarrett/PhilSource'} lang={node} langdesc={'Node.js'} types={null} fe={react} styles={sass} db={psql}/>
	
	<ProjectCard project={'Biptools'} desc={bipdesc} applink={'https://biptools.site/'} githublink={'https://github.com/gavinbarrett/BIP39_Suite/'} images={null} lang={python} langdesc={'Python3'} types={typescript} fe={react} styles={sass}/>

	<ProjectCard project={'Organon'} desc={organondesc} applink={'https://organon-engine.site'} githublink={'https://github.com/gavinbarrett/SL_Engine'} images={null} lang={python} fe={react} styles={css}/>
	
	<ProjectCard project={'ProtoPhile'} images={null} desc={protodesc} applink={'https://github.com/gavinbarrett/ProtoPhile'} githublink={'https://github.com/gavinbarrett/ProtoPhile'} lang={python} langdesc={'Python3'} types={null} fe={null} styles={null}/>
	</div>
	<div className='tabheader'>Contact Me</div>
	<Emailer/>
	</div>);
}