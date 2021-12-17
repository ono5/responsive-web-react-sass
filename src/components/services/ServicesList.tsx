import { useState } from "react"
import { BiChevronRight} from "react-icons/bi"
import { serviceType } from "../../context/SharedContext"

const ServicesList = (props: {services: [serviceType]}) => {
	const [current, setCurrent] = useState(0)
	const showDetails = (index: number) => {
		setCurrent(index)
	}

	return props.services.length > 0 ?
	    // https://ja.stackoverflow.com/questions/75528/typescript-components%E5%86%85%E3%81%A7map%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%A8%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E5%87%BA%E3%82%8B
		<>
			{
				props.services.map((service, index) => (
					<div className="services__list animation" key={index}>
						<h4
							className={`services__list__heading
							 ${current === index
								? 'services__list__heading--active'
								: 'services__list__heading--normal' }`}
							onClick={() => showDetails(index)}
						>
							<BiChevronRight
							  size={20}
							  className={`${current === index ? 'services__rotate' : 'services__back'}`}
							  color={`${current === index ? '#ff4d58' : 'black'}`}
							/>
							{service.heading}
						</h4>
						<p
							className={
								`services__list__details ${current === index ? 'services__list__details--show' : ''}
						}`}>
							{service.p}
						</p>
					</div>
				))
			}
		</>
		: (
			<></>
		)
}

export default ServicesList
