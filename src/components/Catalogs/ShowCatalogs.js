import React, { Fragment } from 'react';
import Edit from '../../components/icons/Edit';
import Trash from '../../components/icons/Trash';
import { Cards } from '../Cards';
import { useDeleteCatalog, useGetCatalogs } from '../../hooks/useCatalogs';
import { Loader } from '../Loader';
import { useHistory } from 'react-router-dom';
import '../../assets/styles/page/catalogs.scss';

export const ShowCatalogs = () => {
	const history = useHistory();
	const { catalogs, loading } = useGetCatalogs();
	return (
		<Fragment>
			<div className="btn__group">
				<button className="btn btn__primary" onClick={() => history.push('/catalogs/add')}>
					+ Catálogo
				</button>
			</div>
			{loading ? (
				<Loader />
			) : catalogs && catalogs.length !== 0 ? (
				<Cards>
					{catalogs.map(({ title, url__file, name, id, description, name__file }) => {
						return (
							<div className="card__catalogs" key={id}>
								<div className="card__image">
									<img src={url__file} alt={`Categoría ${name} `} />
								</div>
								<div className="card__information">
									<h2>{title}</h2>
									<p>{description}</p>
								</div>
								<div className="card__action">
									<button
										className="btn__action"
										onClick={() => history.push(`/catalogs/edit/${id}`)}>
										<Edit Width={14} Height={14} />
									</button>
									<button
										className="btn__action"
										onClick={() => useDeleteCatalog({ id, name__file })}>
										<Trash Width={14} Height={14} />
									</button>
								</div>
							</div>
						);
					})}
				</Cards>
			) : (
				<h3>No existen catálogos para mostrar.</h3>
			)}
		</Fragment>
	);
};
