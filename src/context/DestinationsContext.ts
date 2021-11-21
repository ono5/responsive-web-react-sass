import { createContext } from 'react'

export interface dataType {
	id: number,
	name: string,
	details: string,
	image: string,
	bigImage: string,
	language: string,
	currency: string
}

export interface cityType {
	id: number,
	name: string,
	price: number,
	image: string,
	duration: string,
	room: boolean,
	food: boolean,
	status: string,
	destinationId: number
}

const initialData : [dataType] = [{
	id: 0,
	name: "",
	details: "",
	image: "",
	bigImage: "",
	language: "",
	currency: ""
}]

const initialfilteredCities : [cityType] = [{
	id: 0,
	name: "",
	price: 0,
	image: "",
	duration: "",
	room: false,
	food: false,
	status: "",
	destinationId: 0
}]

const initialDetails: dataType = {
	id: 0,
	name: "",
	details: "",
	image: "",
	bigImage: "",
	language: "",
	currency: ""
}

const DestinationsContext = createContext({
	destinationsData: {
		destinations: initialData,
		details: initialDetails,
		filteredCities: initialfilteredCities,
	},
	dispatch: (type: {}) => {},
})

export default DestinationsContext
