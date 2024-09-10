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
			<div id="hero" className="relative flex min-h-screen -mt-20 -z-10">
				<div className="absolute inset-0 bg-[url('https://cdn.mos.cms.futurecdn.net/9GTJo42N2uEr99T8Svxava.png')] bg-auto bg-no-repeat bg-center opacity-50"></div>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 text-black w-full flex flex-col grow justify-center text-3xl">
					<h1 className="text-8xl drop-shadow-2xl text-white my-4 mx-auto -mt-28">
						Build, Play, Thrive.
					</h1>
					<p className="drop-shadow-lg text-white mx-auto my-4">
						Where Tiny Heroes Conquer Big Adventures!
					</p>
				</div>
			</div>
			<div className="flex justify-center bg-zinc-300 dark:bg-zinc-900"></div>
			<h1 className="spicy text-center bg-zinc-50 dark:bg-zinc-900 text-[clamp(2.5rem,7vw,4rem)] pt-14 shadow-black shadow-lg">
				From the Developer
			</h1>
			<div
				id="Blog-list"
				className="p-1 flex flex-col gap-8 items-center w-full sm:p-12 bg-zinc-50 dark:bg-zinc-900"
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
