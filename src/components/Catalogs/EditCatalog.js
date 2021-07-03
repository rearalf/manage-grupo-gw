import React from 'react';
import { useEditCatalog } from '../../hooks/useCatalogs';
import { FiSave, FiXCircle } from 'react-icons/fi';
import { MessageWarning } from '../Message';
import { useHistory } from 'react-router-dom';

export const EditCatalog = ({ id = '' }) => {
	const history = useHistory();
	const {
		upload,
		description,
		title,
		name__file,
		url__file,
		ChangeInput,
		ChangeFileName,
		EditCatalog,
		CancelButton,
	} = useEditCatalog({
		id,
	});

	return (
		<div className="edit__catalog">
			<h2>Editar Catálogo</h2>
			<form className="form__catalog">
				<div className="inputs__group">
					<div className="input__file">
						<img
							src={url__file ? url__file : 'https://placehold.co/370x430'}
							alt="image__exmaple"
							id="image__exmaple"
							className="file__image_example"
						/>
						<h3 id="file__name">{name__file ? name__file : 'Nombre de la imagen'}</h3>
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
							placeholder="Image.jpg"
							onChange={ChangeFileName}
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
								placeholder="Ejemplo &quot;Construcción&quot; "
								value={title}
								onChange={ChangeInput}
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
								placeholder="Ejemplo &quot;Zapato hecho de cuero con suela de Goma.&quot;"
								value={description}
								onChange={ChangeInput}
							/>
						</div>
					</div>
				</div>
				<div className="button__group">
					<button className="btn btn__save" onClick={EditCatalog}>
						<FiSave /> Guardar
					</button>
					<button className="btn btn__danger" onClick={CancelButton}>
						<FiXCircle />Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};
