import { CLOSE_LIGHTBOX, OEPN_LIGHTBOX } from "../types/GalleryTypes"

const GalleryReducer = (state: any, action: any) => {
	if (action.type === OEPN_LIGHTBOX) {
		return {
			...state,
			lightBoxStatus: true,
			currentLightBox: action.payload,
		}
	} else if(action.type === CLOSE_LIGHTBOX) {
		return {
			...state,
			lightBoxStatus: false,
			currentLightBox: {},
		}
	} else {
		return state
	}
}

export default GalleryReducer
