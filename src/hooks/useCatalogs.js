import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	addCatalog,
	deleteCatalog,
	editCatalog,
	GetCatalogs,
	upImageCatalog,
} from '../database/Catalogs';

export const useChangePage = page => {
	const history = useHistory();
	const ChangePage = e => {
		e.preventDefault();
		history.push(`/catalogs/${page}`);
	};
	return {
		ChangePage,
	};
};

export const useGetCatalogs = () => {
	const [ catalogs, setCatalogs ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		setLoading(true);
		GetCatalogs().then(docs => {
			setCatalogs(docs);
			setLoading(false);
		});
	}, []);
	return {
		catalogs,
		loading,
	};
};

export const useAddCatalog = () => {
	const history = useHistory();
	const [ catalog, setCatalog ] = useState({
		title: 'Construcción',
		description:
			'Zapato hecho de cuero con suela de Goma. El eje mide aproximadamente 7 desde el arco, ofreciendo 3 meses de garantía de fabricación.',
		file__image: '',
		name__file: '',
		url__file: '',
	});
	const [ upload, setUpload ] = useState(0);

	const ChangeInput = e => setCatalog({ ...catalog, [e.target.name]: e.target.value });

	const ChangeFileName = e => {
		if (e.target.files[0].name !== undefined) {
			document.getElementById('file__name').innerHTML = e.target.files[0].name;
			let reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			reader.onload = function(){
				const image = document.getElementById('image__exmaple');
				image.src = reader.result;
			};
			setCatalog({
				...catalog,
				file__image: e.target.files[0],
			});
		}
	};

	const AddCatalog = async e => {
		e.preventDefault();
		await upImageCatalog({ setUpload, setCatalog, catalog });
	};

	useEffect(
		() => {
			if (upload === 100 && catalog.name__file !== '') {
				addCatalog({
					catalog,
				})
					.then(data => {
						console.log(data);
						history.push('/catalogs/show');
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		[ upload, catalog.name__file ],
	);

	return {
		catalog,
		ChangeInput,
		ChangeFileName,
		AddCatalog,
		upload,
	};
};

export const useDeleteCatalog = ({ id }) => {
	deleteCatalog({
		id,
	});
};

export const useEditCatalog = () => {
	const [ catalog, setCatalog ] = useState({});
	editCatalog({ catalog });
};
