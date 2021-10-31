import { createContext } from "react";

const ModelContext = createContext({
	state: { modelStatus: false, current: '' },
	dispatch: (type: {}) => {},
})

export default ModelContext
