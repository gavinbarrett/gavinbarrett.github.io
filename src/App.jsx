import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Portfolio } from './components/Portfolio.jsx';
import { ContactForm } from './components/ContactForm.jsx';
import { Donations } from './components/Donations.jsx';
import './components/sass/App.scss';

const App = () => {
	return (<Switch>
		<Route path='/' exact render={() => <Portfolio/>}/>
		<Route path='/contact' render={() => <ContactForm/>}/>
		<Route path='/donate' render={() => <Donations/>}/>
	</Switch>);
}

ReactDOM.render(<Router>
	<App/>
</Router>, document.getElementById('root'));
