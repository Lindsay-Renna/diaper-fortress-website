import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../Components/BlogCard";

const API_URL = import.meta.env.VITE_API_URL;
const devUsername = import.meta.env.VITE_DEV_USERNAME;

function HomePage() {
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
		<main className="flex-grow">
			<div
				id="hero"
				className="bg-[url('https://cdn.mos.cms.futurecdn.net/9GTJo42N2uEr99T8Svxava.png')] bg-auto bg-no-repeat bg-center min-h-screen -mt-20 -z-10 "
			></div>
			<div className="flex justify-center bg-black">
				<img
					className="w-full max-w-screen-lg min-w-96"
					src="/icons/developer-logo2.svg"
					alt="from the developer"
				/>
			</div>
			<div
				id="Blog-list"
				className="p-1 flex flex-col gap-8 items-center w-full sm:p-12 bg-black"
			>
				{isLoading && <h1>Loading...</h1>}

				{!isLoading &&
					blogPosts.map((post) => (
						<BlogCard
							key={post.id}
							imageSrcPath={post.cover_image}
							title={post.title}
							date={post.published_at.slice(0, 10)}
							description={post.description}
							sourceURL={post.canonical_url}
							author={post.user.name}
						/>
					))}
			</div>
		</main>
	);
}

export default HomePage;
