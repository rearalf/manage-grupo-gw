import { dbFireStore, dbStorage } from './InitializaFirebase';

export const GetCatalogs = async () => {
	return await dbFireStore.collection('catalog').get().then(({ docs }) =>
		docs.map(doc => {
			const data = doc.data();
			const id = doc.id;
			return {
				image: data.url__file,
				title: data.title,
				description: data.description,
				id,
			};
		}),
	);
};

export const addCatalog = async ({ catalog }) => {
	return await dbFireStore
		.collection('catalog')
		.add({
			name__file: catalog.name__file,
			url__file: catalog.url__file,
			title: catalog.title,
			description: catalog.description,
		})
		.then(docRef => {
			console.log('Document written with ID: ', docRef.id);
			return {
				docRef,
			};
		})
		.catch(error => {
			console.error('Error adding document: ', error);
			return {
				error,
			};
		});
};

export const upImageCatalog = async ({ setUpload, setCatalog, catalog }) => {
	let name = new Date().valueOf();
	const storageRef = dbStorage.ref();
	var imagesRef = storageRef.child(`catalog/${name}`);
	let task = imagesRef.put(catalog.file__image);

	const uploadStatusRegister = snapshot => {
		let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
		setUpload(Math.round(percentage));
	};
	const errorUpload = error => {
		console.error(erro);
		return {
			error,
		};
	};
	const getURL = async () => {
		await task.snapshot.ref.getDownloadURL().then(downloadURL => {
			setCatalog({ ...catalog, ['name__file']: name, ['url__file']: downloadURL });
		});
	};

	await task.on('state_changed', uploadStatusRegister, errorUpload, getURL);
};

export const editCatalog = ({ catalog }) => {
	console.log(catalog);
};

export const deleteCatalog = ({ id }) => {
	console.log(id);
};

export const deleteImageCatalog = image => {
	const storageRef = dbStorage.ref();
	const imageRef = storageRef.child(`catalog/${image}`);
	imageRef.delete().then(data => {
		console.log(data);
	});
};
