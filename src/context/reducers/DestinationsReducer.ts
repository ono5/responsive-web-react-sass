import { DETAILS, CITIES } from "../types/DestinationTypes"
import { dataType, cityType } from '../DestinationsContext'

const DestinationsReducer = (state: any, action: any) => {
	const {type, payload} = action
	if (type === DETAILS) {
		const destination = state.destinations.find(
			(destination: dataType) => destination.id === parseInt(payload))
		return {
			...state,
			details: destination
		}
	} else if(type === CITIES) {
		const filtered = state.cities.filter((city: cityType) =>
			city.destinationId === parseInt(payload))
		return {
			...state,
			filteredCities: filtered,
		}
	} else {
		return state
	}
}

export default DestinationsReducer
