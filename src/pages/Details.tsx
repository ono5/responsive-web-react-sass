import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import DestinationsContext from "../context/DestinationsContext"
import { DETAILS, CITIES } from "../context/types/DestinationTypes"
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import DestinationInfo from "../components/Desinationinfo"
import Cities from "../components/cities/Cities"
import Footer from "../components/footer/Footer"

const Details = () => {
	const { destinationsData, dispatch } = useContext(DestinationsContext)
	const { id } = useParams<{id?: string}>()
	const { details, filteredCities } = destinationsData
	useEffect(() => {
		dispatch({ type: DETAILS, payload: id})
		dispatch({ type: CITIES, payload: id})
		window.scroll(0, 0)
	}, [id])
	return (
		<>
			<Helmet>
				<title>{ details.name }</title>
			</Helmet>
			<Header heading={details.name} paragraph="" children="" image={details.image}></Header>
			<DestinationInfo details={details} />
			<Cities cities={filteredCities} name={details.name} />
			<Footer />
		</>
	)
}

export default Details
