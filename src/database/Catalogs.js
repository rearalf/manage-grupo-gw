import { dbStorage } from './InitializaFirebase';

export const GetCatalogs = async () => {
	return await dbStorage.collection('Category').get().then(({ docs }) =>
		docs.map(doc => {
			const data = doc.data();
			const id = doc.id;
			return {
				Image: data.Image,
				Name: data.Name,
				Id: id,
			};
		}),
	);
};
