import React from 'react';
import { useAddCatalog, useChangePage } from '../../hooks/useCatalogs';
import '../../assets/styles/page/catalogs.scss';

export const AddCatalog = () => {
	const { ChangePage } = useChangePage('show');
	const { catalog, ChangeInput, ChangeFileName, AddCatalog, upload } = useAddCatalog();

	return (
		<div className="add__catalog">
			<h2>Agregar Catálogo</h2>
			<form className="form__catalog">
				<div className="inputs__group">
					<div className="input__file">
						<img
							src="https://placehold.co/370x430"
							alt="image__exmaple"
							id="image__exmaple"
							className="file__image_example"
						/>
						<h3 id="file__name">Nome de la imagen</h3>
						<label
							htmlFor="file__image"
							className="btn label labe__file btn__primary"
							aria-required="true">
							Subir imagen
						</label>
						<input
							type="file"
							name="file__image"
							id="file__image"
							className="file__image"
							onChange={ChangeFileName}
							value={catalog.image}
							placeholder="Image.jpg"
						/>
						<div className="progress__bar">
							<div className="percentage" style={{ width: `${upload}%` }}>
								{upload > 0 && `${upload}%`}
							</div>
						</div>
					</div>
					<div className="input__texts">
						<div className="input__group">
							<label htmlFor="title" className="label__group">
								Titulo del catálogo
							</label>
							<input
								type="text"
								name="title"
								id="title"
								aria-label="Title"
								value={catalog.title}
								onChange={ChangeInput}
								placeholder="Ejemplo &quot;Construcción&quot; "
							/>
						</div>
						<div className="input__group">
							<label htmlFor="description" className="label__group">
								Descipción del catálogo
							</label>
							<textarea
								name="description"
								id="description"
								cols="30"
								rows="10"
								value={catalog.description}
								onChange={ChangeInput}
								placeholder="Ejemplo &quot;Zapato hecho de cuero con suela de Goma.&quot;"
							/>
						</div>
					</div>
				</div>
				<div className="button__group">
					<button className="btn btn__save" onClick={AddCatalog}>
						Guardar
					</button>
					<button className="btn btn__danger" onClick={ChangePage}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};
