import { createContext, useContext, useEffect, useState } from "react";
const ViewContext = createContext();

export function ViewProvider({ children }) {
	const [LeftIsHidden, ToggleLeftHide] = useState(false);
	//TODO SAVE IN LOCAL STORAGE THIS
	// use context
	return (
		<ViewContext.Provider
			value={{
				LeftIsHidden,
				ToggleLeftHide,
			}}>
			{children}
		</ViewContext.Provider>
	);
}

export function UseViewContext() {
	return useContext(ViewContext);
}
