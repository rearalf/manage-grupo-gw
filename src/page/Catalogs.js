import React from 'react';
import { AppLayout } from '../components/AppLayout';
import { ShowCatalogs } from '../components/Catalogs/ShowCatalogs';
import { useCatalogs } from '../hooks/useCatalogs';
import { AddCatalog } from '../components/Catalogs/AddCatalog';
import { useParams } from 'react-router-dom';
import '../assets/styles/page/catalogs.scss';

export const Catalogs = () => {
	const { action } = useParams();
	return (
		<AppLayout ClassName="Catalogs">
			<h1>Catálogos</h1>
			{action === 'show' ? (
				<ShowCatalogs />
			) : action === 'add' ? (
				<AddCatalog />
			) : (
				<h1>Hello</h1>
			)}
		</AppLayout>
	);
};
