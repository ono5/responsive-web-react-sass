import { useContext } from 'react'
import { galleryType } from "../../context/GalleryContext"
import { LazyLoadImage } from "react-lazy-load-image-component"
import GalleryContext from '../../context/GalleryContext'
import { OEPN_LIGHTBOX } from "../../context/types/GalleryTypes"

const GalleryImage = (props: {glr: galleryType}) => {
	const { dispatch } = useContext(GalleryContext)
	const openLightBox = (imageObject: galleryType) => {
		dispatch({type: OEPN_LIGHTBOX, payload: imageObject})
	}
	return (
		<div className="col-3">
			<div className="gallery__image">
				<LazyLoadImage
				  src={props.glr.image}
				  onClick={() => openLightBox(props.glr)} />
			</div>
		</div>

	)
}

export default GalleryImage
