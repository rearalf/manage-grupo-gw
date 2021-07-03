import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../page/Home';
import { About } from '../page/About ';
import { Catalogs } from '../page/Catalogs';
import { NotificationContext } from '../context/notificationContext';

const App = () => {
	return (
		<HashRouter>
			<NotificationContext>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/catalogs/:action?/:id?" component={Catalogs} />
				</Switch>
			</NotificationContext>
		</HashRouter>
	);
};

export default App;
