import { useReducer } from "react";
import SharedContext from "../SharedContext";
import SharedReducer from "../reducers/SharedReducer";
import { services } from "../../data/services";

const SharedProvider = (props: any) => {
	const [sharedData, dispatch] = useReducer(SharedReducer, {
		servicesData: services,
	})

	return (

		<SharedContext.Provider value={{ sharedData, dispatch }}>
			{props.children}
		</SharedContext.Provider>
	)
}

export default SharedProvider
