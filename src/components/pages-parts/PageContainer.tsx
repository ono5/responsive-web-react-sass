import { Link } from "react-router-dom"
import Header from "../Header"
const PageContainer = (props: {data: any, children: any}) => {
	return (
		<>
			<Header heading={props.data.heading} paragraph="" children="" image="" />
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="col-6 animation">
							{props.children}
						</div>
						<div className="col-6">
							<div className="page__info">
								<h2 className="heading headingAnimation">{props.data.heading}</h2>
								<h1 className="page__info__heading animation">{props.data.pageHeading}</h1>
								<p className="page__info__msg animation">{props.data.message}</p>
								<div className="page__info__link animation">
									<Link to="/" className="btn-dark">go back</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PageContainer
