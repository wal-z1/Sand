import { Routes, Route } from "react-router-dom";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";
function App() {
	fetch("https://api.github.com/repos/wal-z1/Sand/commits")
		.then((res) => res.json)
		.then((res) => console.log(res));

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
