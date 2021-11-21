import { cityType } from "../../context/DestinationsContext"
import CityImage from "./CityImage"
import CityContents from "./CityContents"

const Cities = (props: {cities: [cityType], name: string}) => {
	return (
		<div className="cities">
			<div className="container">
				<div className="cities__container">
					<h2 className="heading">Cities in {props.name}</h2>
					<div className="row ml-minus-15 mr-minus-15">
						{props.cities.length > 0 ? props.cities.map((city) => (
							<div className="col-3 p-15" key={city.id}>
								<div className="cities__body">
									<CityImage image={city.image} status={city.status} />
									<CityContents
										name={city.name}
										duration={city.duration}
										price={city.price}
										room={city.room}
										food={city.food}
									/>
								</div>
							</div>
						)) : `No cities in ${props.name}`}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cities
