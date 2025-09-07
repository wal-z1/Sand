import { Routes, Route, useLocation } from "react-router-dom";
import { ViewProvider } from "./Context/ViewContext";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";
import { useEffect } from "react";

function App() {
	return (
		<ViewProvider>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</ViewProvider>
	);
}

export default App;
