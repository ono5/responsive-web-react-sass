const DestinationDetails = (props: {title: string, text: string}) => {

	return (
		<div className="destinationInfo__details">
			<div className="destinationInfo__details__head">
				{props.title}
			</div>
			<div className="destinationInfo__details__text">
				{props.text}
			</div>
		</div>
	)
}

export default DestinationDetails
