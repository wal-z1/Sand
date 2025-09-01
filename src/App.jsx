import { Routes, Route } from "react-router-dom";
import Header from "./Comp/Header/Header";
function App() {
	return (
		<>
			<Header/>
			<Routes>
				<Route path="step-2" element={<></>}></Route>
			</Routes>
		</>
	);
}

export default App;
