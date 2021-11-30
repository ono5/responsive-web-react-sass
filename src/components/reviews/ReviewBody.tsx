import { reviewType } from "../../context/SharedContext"
import { BsFillStarFill, BsStar } from "react-icons/bs"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ReviewBody = (props : {review: reviewType}) => {
	const rating = (stars: number) => {
		let container = []
		for (let i = 1; i <= 5; i++) {
			if (i <= stars) {
				container.push(<BsFillStarFill size={13} color="#df2189" className="reviews__body__contents__info__rating__icon" key={i} />)
			} else {
				container.push(<BsStar size={13} color="#df2189" className="reviews__body__contents__info__rating__icon" key={i} />)
			}
		}
		return container
	}
	return (
		<div className="col-4 p-15">
			<div className="reviews__body">
				<div className="reviews__body__contents">
					<div className="reviews__body__contents__image">
						<LazyLoadImage src={props.review.image} alt={props.review.image} />
					</div>
					<div className="reviews__body__contents__info">
						<div className="reviews__body__contents__info__name">
							{props.review.name}
						</div>
						<div className="reviews__body__contents__info__rating">
							{rating(props.review.stars)}
						</div>
						<div className="reviews__body__contents__info__comment">
							{props.review.comment}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewBody
