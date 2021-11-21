import { BsCheck, BsX } from 'react-icons/bs'

const Facilities = (props: {name: string, value: boolean}) => {
	return (
		<div className="cities__body__contents__facilities">
			<div className="cities__body__contents__facilities__name">{props.name}</div>
			<div className="cities__body__contents__facilities__value">
				{props.value ? (
					<BsCheck size={20} color="#34d399" />
				) : (
					<BsX size={20} color="ff4d58" />
				)}
			</div>
		</div>
	)
}

export default Facilities
