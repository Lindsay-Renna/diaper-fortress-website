import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
