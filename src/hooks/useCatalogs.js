import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import notificationContext from '../context/notificationContext';
import {
	addCatalog,
	deleteCatalog,
	editCatalog,
	getCatalog,
	GetCatalogs,
	upImageCatalog,
} from '../database/Catalogs';

export const useGetCatalogs = () => {
	const [ catalogs, setCatalogs ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const setSnapShot = snapshot => {
		const data = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data(),
		}));
		setCatalogs(data);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		GetCatalogs(setSnapShot);
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
	const { setMessage, message, setNotification } = useContext(notificationContext);

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

	const CancelButton = e => {
		e.preventDefault();
		setMessage({
			isOpenMessage: true,
			titleMessage: '¿Desea salir de está pagina?',
			subTitleMessage: 'Si sale, perdera la información que no a guardado.',
			onConfirm: () => {
				setMessage({
					...message,
					isOpenMessage: false,
				});
				history.push(`/catalogs/show`);
			},
		});
	};

	useEffect(
		() => {
			if (upload === 100 && catalog.name__file !== '') {
				addCatalog({
					catalog,
				})
					.then(data => {
						console.log(data);
						setNotification({
							isOpen: true,
							title: 'Success',
							subTitle: 'La operación fue un éxito.',
							type: 'success',
						});
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
		CancelButton,
	};
};

export const useDeleteCatalog = () => {
	const { setMessage, message, setNotification } = useContext(notificationContext);
	const DeleteCatalog = ({ id, name__file }) => {
		setMessage({
			isOpenMessage: true,
			titleMessage: '¿Desea eliminar este catálogo?',
			subTitleMessage: 'Esta acción sera permanente.',
			onConfirm: () => {
				setMessage({
					...message,
					isOpenMessage: false,
				});
				deleteCatalog({
					id,
					name__file,
				}).then(() => {
					setNotification({
						isOpen: true,
						title: 'Success',
						subTitle: 'La operación fue un éxito.',
						type: 'success',
					});
				});
			},
		});
	};
	return {
		DeleteCatalog,
	};
};

export const useEditCatalog = ({ id }) => {
	const history = useHistory();
	const [ catalog, setCatalog ] = useState({
		title: '',
		description: '',
		file__image: '',
		name__file: '',
		url__file: '',
	});
	const [ upload, setUpload ] = useState(0);
	const { setNotification, message, setMessage } = useContext(notificationContext);

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

	const EditCatalog = e => {
		e.preventDefault();
		if (catalog.file__image === '') {
			editCatalog({ catalog, id }).then(() => {
				history.push('/catalogs/show');
			});
		}
		else {
			upImageCatalog({ setUpload, setCatalog, catalog }).then(() => {
				editCatalog({ catalog, id });
			});
		}
		setNotification({
			isOpen: true,
			title: 'Success',
			subTitle: 'La operación fue un éxito.',
			type: 'success',
		});
	};

	const CancelButton = e => {
		e.preventDefault();
		setMessage({
			isOpenMessage: true,
			titleMessage: '¿Desea salir de está pagina?',
			subTitleMessage: 'Si sale, perdera la información que no a guardado.',
			onConfirm: () => {
				setMessage({
					...message,
					isOpenMessage: false,
				});
				history.push(`/catalogs/show`);
			},
		});
	};

	useEffect(() => {
		getCatalog({ id }).then(({ title, description, url__file, name__file }) => {
			setCatalog({
				...catalog,
				title,
				description,
				url__file,
				name__file,
			});
		});
	}, []);

	useEffect(
		() => {
			if (upload === 100) {
				history.push('/catalogs/show');
			}
		},
		[ upload ],
	);

	return {
		ChangeInput,
		ChangeFileName,
		EditCatalog,
		upload,
		title: catalog.title,
		description: catalog.description,
		name__file: catalog.name__file,
		url__file: catalog.url__file,
		CancelButton,
	};
};
