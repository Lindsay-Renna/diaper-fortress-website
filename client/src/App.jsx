import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MediaPage from "./Pages/MediaPage";
import WishlistPage from "./Pages/WishlistPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AdminPage from "./Pages/AdminPage";
import NewBlogPostPage from "./Pages/NewBlogPostPage";
import LoginPage from "./Pages/LoginPage";
import AuthFailPage from "./Pages/AuthFailPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/admin/compose" element={<NewBlogPostPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/media" element={<MediaPage />} />
					<Route path="/wishlist" element={<WishlistPage />} />
					<Route path="/*" element={<NotFoundPage />} />
					<Route path="/auth-fail" element={<AuthFailPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
