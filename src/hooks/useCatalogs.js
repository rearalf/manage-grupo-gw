import { useEffect, useState } from 'react';
import { GetCatalogs } from '../database/Catalogs';

export const useCatalogs = () => {
	const [ catalogs, setCatalogs ] = useState([]);

	useEffect(() => {
		GetCatalogs().then(docs => {
			setCatalogs(docs);
		});
	}, []);

	return {
		catalogs,
	};
};
