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
						<a href="#" className="text-white hover:text-gray-300">
							Blog
						</a>

						<a href="#" className="text-white hover:text-gray-300">
							Wishlist
						</a>
						<a href="#" className="text-white hover:text-gray-300">
							Screenshots
						</a>

						<a href="#" className="text-white hover:text-gray-300">
							About
						</a>

						<a href="#" className="text-white hover:text-gray-300">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
