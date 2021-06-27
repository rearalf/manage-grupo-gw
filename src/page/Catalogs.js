import React from 'react';
import { AppLayout } from '../components/AppLayout';
import { ShowCatalogs } from '../components/Catalogs/ShowCatalogs';
import { AddCatalog } from '../components/Catalogs/AddCatalog';
import { EditCatalog } from '../components/Catalogs/EditCatalog';
import { useParams } from 'react-router-dom';
import '../assets/styles/page/catalogs.scss';

export const Catalogs = () => {
	const { action, id } = useParams();
	return (
		<AppLayout ClassName="Catalogs">
			<h1>Catálogos</h1>
			{action === 'show' ? (
				<ShowCatalogs />
			) : action === 'add' ? (
				<AddCatalog />
			) : (
				<EditCatalog id={id} />
			)}
		</AppLayout>
	);
};
