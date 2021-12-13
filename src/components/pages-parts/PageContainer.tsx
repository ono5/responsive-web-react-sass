import { Link } from "react-router-dom"
import Header from "../Header"
const PageContainer = (props: {data: any, children: any}) => {
	return (
		<>
			<Header heading={props.data.heading} paragraph="" children="" image="" />
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="col-6">
							{props.children}
						</div>
						<div className="col-6">
							<div className="page__info">
								<h2 className="heading">{props.data.heading}</h2>
								<h1 className="page__info__heading">{props.data.pageHeading}</h1>
								<p className="page__info__msg">{props.data.message}</p>
								<div className="page__info__link">
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
