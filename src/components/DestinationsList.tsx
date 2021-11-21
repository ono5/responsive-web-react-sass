import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GiPositionMarker } from 'react-icons/gi'
import { Link }  from 'react-router-dom'
import { dataType } from '../context/DestinationsContext'

const DestinationsList = (props: {destination: dataType}) => {
	return (
		<div className="col-3 p-15">
			<div className="destinations__card">
				<div className="destinations__card__img">
					<LazyLoadImage src={props.destination.image} alt={props.destination.image} />
				</div>
				<div className="destinations__card__layer">
					<div className="destinations__card__layer__content">
						<GiPositionMarker size={20} />
						<div className="destinations__card__layer__content__country">
							 {props.destination.name}
						</div>
					</div>
				</div>
				<div className="destinations__card__info">
					<div className="destinations__card__info__text">
						<Link to={`/details/${props.destination.id}`} className="btn-white">Explore</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DestinationsList
