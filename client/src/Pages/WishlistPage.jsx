function WishlistPage() {
	return (
		<main className="flex flex-col flex-grow">
			<div className="flex flex-grow flex-col">
				<div className="relative flex min-h-96">
					<div className="absolute inset-0 bg-[url('https://cdn.mos.cms.futurecdn.net/9GTJo42N2uEr99T8Svxava.png')] bg-auto bg-no-repeat bg-center opacity-50"></div>

					<div className="absolute inset-0 bg-black opacity-50"></div>

					<div className="relative -bottom-16 w-full flex items-end justify-center">
						<a
							href="https://store.steampowered.com/app/37230/Diaper_Dash/"
							target="_blank"
							rel="noopener noreferrer"
							className="min-h-[130px] flex items-center justify-center text-center text-[clamp(2.5rem,7vw,4rem)] min-w-fit drop-shadow-2xl text-white border rounded-lg bg-stone-700 p-4 hover:bg-stone-600 transition-colors"
						>
							Wishlist on Steam
						</a>
					</div>
				</div>
				<div className="text-black flex flex-col justify-center items-center grow">
					<h1 className="text-3xl mt-10"> - or -</h1>
					<form className="max-w-sm mx-auto">
						<div className="mb-5">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
							>
								Your email
							</label>
							<input
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@flowbite.com"
								required
							/>
						</div>

						<button
							type="submit"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}

export default WishlistPage;
