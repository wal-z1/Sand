import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path="step-2" element={<></>}></Route>
				<h1 class="text-3xl font-bold underline font-sora text-white">
					Hello world!
				</h1>
			</Routes>
		</>
	);
}

export default App;
