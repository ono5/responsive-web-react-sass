import { createContext } from "react"

export interface galleryType {
	id: number,
	name: string,
	image: string,
}

const initialGalleryType : [galleryType] = [{
	id: 0,
	name: "",
	image: "",
}]

const initCurrentLightBox: galleryType = {
	id: 0,
	name: "",
	image: "",
}

const GalleryContext = createContext({
	galleryStore: {
		gallery: initialGalleryType,
		lightBoxStatus: false,
		currentLightBox: initCurrentLightBox,
	},
	dispatch: (type: {}) => {},
})

export default GalleryContext
