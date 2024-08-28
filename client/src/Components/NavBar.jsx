import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="bg-stone-800 p-4">
			<div className="container mx-auto flex justify-between align-middle">
				<div>
					<img
						src="src/assets/watermark.png"
						alt="idc logo"
						className="rounded-xl w-10 h-11"
					/>
				</div>
				<div className="flex justify-between items-center">
					<div className="hidden md:flex space-x-4">
						<Link to="/" className="text-white hover:text-gray-300">
							Blog
						</Link>
						<Link to="/wishlist" className="text-white hover:text-gray-300">
							Wishlist
						</Link>
						<Link to="/media" className="text-white hover:text-gray-300">
							Media
						</Link>
						<Link to="/about" className="text-white hover:text-gray-300">
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
