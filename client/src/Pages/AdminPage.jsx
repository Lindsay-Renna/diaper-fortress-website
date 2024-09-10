import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;
const devUsername = import.meta.env.VITE_DEV_USERNAME;

function AdminPage() {
	const [blogPosts, setBlogPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const getBlogPosts = async () => {
		try {
			const { data } = await axios.get(`${API_URL}username=${devUsername}`);
			console.log(data);
			setBlogPosts(data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBlogPosts();
	}, []);

	if (isLoggedIn) {
		return (
			<div className="flex flex-col gap-2 sm:flex-row sm:px-6 sm:gap-8 grow md:justify-center dark:bg-stone-900">
				<div className="px-4 pt-4 flex-grow max-w-screen-lg">
					<h1 className="text-white text-xl my-6">Manage Posts</h1>
					<div className="relative overflow-x-auto">
						<table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
							<thead className="text-stone-700 uppercase bg-stone-300 dark:bg-stone-700 dark:text-stone-400 text-lg">
								<tr>
									<th scope="col" className="px-6 py-3">
										Title
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-center hidden sm:visible"
									>
										Date Posted
									</th>
									<th scope="col" className="py-3"></th>
									<th scope="col" className="py-3"></th>
								</tr>
							</thead>
							{isLoading ? (
								<h1>Loading...</h1>
							) : (
								<tbody>
									{blogPosts.map((post) => (
										<tr
											className="bg-white border-b dark:bg-stone-800 dark:border-stone-700"
											key={post.id}
										>
											<th
												scope="row"
												className="text-lg px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
											>
												<Link to={post.url} target="_blank">
													{post.title}
												</Link>
											</th>
											<td className="px-6 py-4 hidden sm:visible">
												{new Date(post.published_at).toLocaleDateString()}
											</td>
											<td className="py-4">
												<img
													className="w-5 m-2 cursor-pointer transform transition-transform duration-300 hover:scale-110"
													src="/icons/pencil.png"
													alt="edit icon"
												/>
											</td>
											<td className="py-4">
												<img
													className="w-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
													src="/icons/delete.svg"
													alt="delete icon"
												/>
											</td>
										</tr>
									))}
								</tbody>
							)}
						</table>
					</div>
				</div>
				<div className="text-center mt-4 sm:my-8 -order-1 sm:order-1">
					<Link to="/admin/compose">
						<button
							type="button"
							className="focus:outline-none text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-8 py-4 mb-3 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900"
						>
							Add a Blog Post
						</button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<section className="bg-gray-50 dark:bg-stone-900 grow items-center justify-center">
			<div className="flex flex-col items-center justify-center px-6 py-14 mx-auto">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-stone-800 dark:border-stone-700 flex flex-col items-center justify-center py-4">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							You are not authorized to view this page. <br /> Please log in.
						</h1>
					</div>
					<Link to="/login" className="w-3/4">
						<button className="border-gray-300 border-2 text-black bg-primary-600 hover:bg-stone-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-stone-700 dark:focus:ring-primary-800 dark:text-white w-full">
							Go to login
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default AdminPage;
