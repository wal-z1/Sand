import { Routes, Route } from "react-router-dom";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
