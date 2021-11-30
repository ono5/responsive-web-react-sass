import { createContext } from "react"

export interface serviceType {
	id: number,
    heading: string,
    p: string,
}

const initialSharedData: [serviceType] = [{
	id: 0,
	heading: "",
	p: ""
}]

export interface reviewType {
	id: number,
	name: string,
	comment: string,
	stars: number,
	image: string
}

const initialReviewData: [reviewType] = [{
	id: 0,
	name: "",
	comment: "",
	stars: 0,
	image: ""
}]

const SharedContext = createContext({
	sharedData: {
		servicesData: initialSharedData,
		reviews: initialReviewData,
	},
	dispatch: (type: {}) => {},
})

export default SharedContext
