import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../page/Home';
import { About } from '../page/About ';
import { Catalogs } from '../page/Catalogs';

const App = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/catalogs" component={Catalogs} />
			</Switch>
		</HashRouter>
	);
};

export default App;
