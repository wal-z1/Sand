import { Routes, Route } from "react-router-dom";
import { ViewProvider } from "./Context/ViewContext";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";

function App() {
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
