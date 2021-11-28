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

const SharedContext = createContext({
	sharedData: { servicesData: initialSharedData},
	dispatch: (type: {}) => {},
})

export default SharedContext
