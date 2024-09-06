import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;
const devUsername = import.meta.env.VITE_DEV_USERNAME;

function AdminPage() {
	const [blogPosts, setBlogPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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

	return (
		<div className="flex gap-8 grow">
			<div className="w-3/4">
				<h1 className="my-8 ml-8">Manage Posts</h1>
				<div className="relative overflow-x-auto my-8 ml-8">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-stone-300 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Title
								</th>
								<th scope="col" className="px-6 py-3">
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
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
										key={post.id}
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{post.title}
										</th>
										<td className="px-6 py-4">
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
											{" "}
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
			<div className="w-1/4 text-center my-8">
				<Link to="/admin/compose">
					<button
						type="button"
						className="focus:outline-none text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900"
					>
						Add a Blog Post
					</button>
				</Link>
			</div>
		</div>
	);
}

export default AdminPage;
