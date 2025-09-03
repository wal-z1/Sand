import { createContext, useContext, useEffect, useState } from "react";
const ViewContext = createContext();

export function ViewProvider({ children }) {
	const LeftLocal = JSON.parse(localStorage.getItem("Left") ?? "true");
	const [LeftIsHidden, ToggleLeftHide] = useState(LeftLocal);
	localStorage.setItem("Left", JSON.stringify(LeftIsHidden));
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
