import React, { Fragment } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi';
import { Cards } from '../Cards';
import { useDeleteCatalog, useGetCatalogs } from '../../hooks/useCatalogs';
import { Loader } from '../Loader';
import { useHistory } from 'react-router-dom';

export const ShowCatalogs = () => {
	const history = useHistory();
	const { catalogs, loading } = useGetCatalogs();
	const { DeleteCatalog } = useDeleteCatalog();
	return (
		<Fragment>
			<div className="btn__group">
				<button className="btn btn__primary" onClick={() => history.push('/catalogs/add')}>
					<FiPlus size={16} title={'Agregar un catálogo'} /> Catálogo
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
										<FiEdit title={'Editar catálogo'} size={16} />
									</button>
									<button
										className="btn__action"
										onClick={e => {
											e.preventDefault();
											DeleteCatalog({
												id,
												name__file,
											});
										}}>
										<FiTrash title={'Eliminar catálogo'} size={16} />
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
