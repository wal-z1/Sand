import { Routes, Route } from "react-router-dom";
import { ViewProvider } from "./Context/ViewContext";
import { AuthProvider } from "./Context/AuthContext";
import Header from "./Comp/Header/Header";
import Home from "./Comp/Pages/Home";
import About from "./Comp/Pages/About";

function App() {
	return (
		<AuthProvider>
			<ViewProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</ViewProvider>
		</AuthProvider>
	);
}

export default App;
