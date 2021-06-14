import React from 'react';
import Close from './icons/Close';
import Maximize from './icons/Maximize';
import Minimize from './icons/minimize';
import Burger from './icons/Burger';
import Restore from './icons/Restore';
import { Link } from 'react-router-dom';
import { useNavBar } from '../hooks/useNavBar';
import '../assets/styles/components/Navbar.scss';

export const Navbar = ({ setToggle, toggle }) => {
	const { Closed, Maximized, Minimized } = useNavBar();

	return (
		<header>
			<nav className="NavBar">
				<div className="left__side">
					<button className="left__side__toggle" onClick={() => setToggle(!toggle)}>
						<Burger Width={16} Height={16} />
					</button>
					<h1>Manage Grupo GW</h1>
				</div>
				<div className="center__side" />
				<div className="right__side">
					<button className="right__side__button__icon" onClick={Minimized}>
						<Minimize Width={14} Height={14} />
					</button>
					<button id="maximize" className="right__side__button__icon" onClick={Maximized}>
						<Maximize Width={14} Height={14} />
					</button>
					<button
						id="restore"
						className="right__side__button__icon hide__btn"
						onClick={Maximized}>
						<Restore Width={14} Height={14} />
					</button>
					<button className="right__side__button__icon" onClick={Closed}>
						<Close Width={14} Height={14} />
					</button>
				</div>
			</nav>

			<div className={`side__nav ${toggle ? '' : 'noneTogle'}`}>
				<div className="brand__nav">
					<button className="btn__toggle" onClick={() => setToggle(!toggle)}>
						<Close Width={14} Height={14} Title={'Close Menu'} />
					</button>
					<h1 className="brand__text">Manage Grupo GW</h1>
				</div>
				<ul className="navbar__nav">
					<li className="nav__item">
						<Link className="nav__link" to="/">
							Home
						</Link>
					</li>
					<li className="nav__item">
						<Link className="nav__link" to="/about">
							About
						</Link>
					</li>
					<li className="nav__item">
						<Link className="nav__link" to="/catalogs/show">
							Catálogos
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};
