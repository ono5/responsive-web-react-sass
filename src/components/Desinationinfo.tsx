import { dataType } from "../context/DestinationsContext"
import DestinationDetails from "./DestinationDetails"

const DestinationInfo = (props: {details: dataType}) => {
	return (
		<div className="destinationInfo">
			<div className="container">
				<h2 className="heading headingAnimation">
					Overview
				</h2>
				<div className="row">
					<div className="col-8">
						<p className="destinationInfo__p animation">
							{props.details.details}
						</p>
					</div>
				</div>
				<h2 className="heading headingAnimation">
					Good to know
				</h2>
				<div className="row">
					<div className="col-8">
						<DestinationDetails title="Language" text={props.details.language} />
						<DestinationDetails title="Currency" text={props.details.currency} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default DestinationInfo
