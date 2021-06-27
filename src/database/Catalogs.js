import { dbFireStore, dbStorage } from './InitializaFirebase';

export const GetCatalogs = async setSnapShot => {
	await dbFireStore.collection('catalog').onSnapshot(setSnapShot);
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
	let name;

	if (catalog.name__file) {
		name = catalog.name__file;
		deleteImageCatalog(name);
	}
	else {
		name = new Date().valueOf();
	}
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

export const getCatalog = ({ id }) => {
	return dbFireStore.collection('catalog').doc(id).get().then(doc => {
		const data = {
			id: doc.id,
			...doc.data(),
		};
		return data;
	});
};

export const editCatalog = async ({ catalog, id }) => {
	if (catalog.file__image === '') {
		return await dbFireStore
			.collection('catalog')
			.doc(id)
			.update({
				title: catalog.title,
				description: catalog.description,
			})
			.catch(err => {
				console.log(err);
				return err;
			});
	}
	else {
		return await dbFireStore
			.collection('catalog')
			.doc(id)
			.update({
				title: catalog.title,
				description: catalog.description,
				url__file: catalog.url__file,
				name__file: catalog.name__file,
			})
			.catch(err => {
				console.log(err);
				return err;
			});
	}
};

export const deleteCatalog = async ({ id, name__file }) => {
	return await dbFireStore
		.collection('catalog')
		.doc(id)
		.delete()
		.then(() => {
			deleteImageCatalog(name__file);
			console.log('Document successfully deleted!');
		})
		.catch(error => {
			console.error('Error removing document: ', error);
		});
};

export const deleteImageCatalog = name__file => {
	const storageRef = dbStorage.ref();
	const imageRef = storageRef.child(`catalog/${name__file}`);
	imageRef.delete().then(data => {
		console.log('Delete Image');
	});
};
