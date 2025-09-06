import { Routes, Route, useLocation } from "react-router-dom";
import { ViewProvider } from "./Context/ViewContext";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";
import { useEffect } from "react";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]); // runs when changing route

	return null;
}

function App() {
	return (
		<ViewProvider>
			<Header />
			<ScrollToTop /> {/* needs to be included to run */}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</ViewProvider>
	);
}

export default App;
