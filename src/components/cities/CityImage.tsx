import { LazyLoadImage } from "react-lazy-load-image-component"

const CityImage = (city: {image: string, status: string}) => {
	return (
		<div className="cities__body__image">
			<LazyLoadImage src={city.image} alt={city.image} />
			<div className={
				city.status ===
					'Bestselling'
					? 'bestselling' : city.status === 'New'
					? 'new' : city.status === 'Hot'
					? 'hot' : ''
			}>
			{city.status}</div>
		</div>

	)
}

export default CityImage
