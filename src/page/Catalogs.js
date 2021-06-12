import React from 'react';
import Edit from '../components/icons/Edit';
import Trash from '../components/icons/Trash';
import { AppLayout } from '../components/AppLayout';
import { useCatalogs } from '../hooks/useCatalogs';
import { Cards } from '../components/Cards';
import '../assets/styles/page/catalogs.scss';

export const Catalogs = () => {
	const { catalogs } = useCatalogs();
	return (
		<AppLayout ClassName="Catalogs">
			<h1>Categoría</h1>
			<div className="btn__group">
				<button className="btn btn__primary">+ Categoría</button>
			</div>
			<Cards>
				{catalogs.map(({ Image, Name, Id }) => {
					return (
						<div className="card__catalogs" key={Id}>
							<div className="card__image">
								<img src={Image} alt={`Categoría ${Name} `} />
							</div>
							<div className="card__information">
								<h2>{Name}</h2>
								<p>
									Zapato hecho de cuero con suela de Goma. El eje mide
									aproximadamente 7 desde el arco, ofreciendo 3 meses de garantia
									de fabricación. Goodyear welt construcción ofrece durabilidad
									para hormigón construcción industrial contratista de seguridad
									Cojín con plantilla extraíble con opción antideslizante suela de
									goma Conveniente gancho rápido y parte trasera velcro para fácil
									uso Big de tendido 1 1/2 Tamaño más grande que timberlands y
									orugas más tallas detalle bajo descripción del producto.
								</p>
							</div>
							<div className="card__action">
								<button className="btn__action">
									<Edit Width={14} Height={14} />
								</button>
								<button className="btn__action">
									<Trash Width={14} Height={14} />
								</button>
							</div>
						</div>
					);
				})}
			</Cards>
		</AppLayout>
	);
};
