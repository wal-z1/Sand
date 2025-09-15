import { Routes, Route, useLocation } from "react-router-dom";
import { ViewProvider } from "./Context/ViewContext";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";
import { useEffect } from "react";
import About from "./Comp/Pages/About";

function App() {
	useEffect(() => {
		async function TheBAckendFetchFUn() {
			try {
				const back = await fetch("/api");

				console.log(back);
			} catch (err) {
				console.error("error from backend", err);
			}
		}
		TheBAckendFetchFUn();
	}, []);

	return (
		<ViewProvider>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</ViewProvider>
	);
}

export default App;
