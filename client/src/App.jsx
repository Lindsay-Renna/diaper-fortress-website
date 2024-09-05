import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MediaPage from "./Pages/MediaPage";
import WishlistPage from "./Pages/WishlistPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/media" element={<MediaPage />} />
					<Route path="/wishlist" element={<WishlistPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
