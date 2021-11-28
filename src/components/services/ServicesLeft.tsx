const ServicesLeft = (state: {heading: string, subHeading: string}) => {
	return (
		<div className="services__left">
			<h1 className="services__left__heading">
				{state.heading}
			</h1>
			<p className="services__left__paragraph">
				{state.subHeading}
			</p>
		</div>
	)
}

export default ServicesLeft
