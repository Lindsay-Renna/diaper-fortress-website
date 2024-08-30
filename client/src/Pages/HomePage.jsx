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
		<div id="Blog-list" className="m-4">
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
					/>
				))}
		</div>
	);
}

export default HomePage;
