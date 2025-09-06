import { Routes, Route } from "react-router-dom";
import { ViewProvider } from "./Context/ViewContext";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// reset the scroll position
	return (
		<>
			<ViewProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</ViewProvider>
		</>
	);
}

export default App;
