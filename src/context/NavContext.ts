import { createContext } from "react";

const NavContext = createContext({
	state: {},
	dispatch: (type: {}) => {},
});

export default NavContext
