import React from 'react';
import { Link } from 'react-router-dom';
import { useNavBar } from '../hooks/useNavBar';
import { FiMenu, FiX, FiHome } from 'react-icons/fi';
import { GrCatalog } from 'react-icons/gr';
import {
	VscChromeMinimize,
	VscChromeClose,
	VscChromeMaximize,
	VscChromeRestore,
} from 'react-icons/vsc';
import '../assets/styles/components/Navbar.scss';

export const Navbar = ({ setToggle, toggle }) => {
	const { Closed, Maximized, Minimized } = useNavBar();

	return (
		<header>
			<nav className="NavBar">
				<div className="left__side">
					<button className="left__side__toggle" onClick={() => setToggle(!toggle)}>
						<FiMenu size={18} title={'Abrir menu'} />
					</button>
					<h1>Manage Grupo GW</h1>
				</div>
				<div className="center__side" />
				<div className="right__side">
					<button className="right__side__button__icon" onClick={Minimized}>
						<VscChromeMinimize title={'Minimizar ventana'} size={18} />
					</button>
					<button id="maximize" className="right__side__button__icon" onClick={Maximized}>
						<VscChromeMaximize title={'Maximizar ventana'} size={18} />
					</button>
					<button
						id="restore"
						className="right__side__button__icon hide__btn"
						onClick={Maximized}>
						<VscChromeRestore title={'Restaurar ventana'} size={18} />
					</button>
					<button className="right__side__button__icon" onClick={Closed}>
						<VscChromeClose title={'Cerrar Ventana'} size={18} />
					</button>
				</div>
			</nav>

			<div className={`side__nav ${toggle ? '' : 'noneTogle'}`}>
				<div className="brand__nav">
					<button className="btn__toggle" onClick={() => setToggle(!toggle)}>
						<FiX size={20} title={'Cerra menu'} />
					</button>
					<h1 className="brand__text">Manage Grupo GW</h1>
				</div>
				<ul className="navbar__nav">
					<li className="nav__item">
						<Link className="nav__link" to="/">
							<FiHome size={16} title={'Inicio'} />Home
						</Link>
					</li>
					<li className="nav__item">
						<Link className="nav__link" to="/catalogs/show">
							<GrCatalog size={16} title={'Catálogo'} /> Catálogos
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};
