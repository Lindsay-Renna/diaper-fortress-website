import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function BlogCard({
	imageSrcPath,
	title,
	date,
	description,
	sourceURL,
	author,
}) {
	return (
		<div className="max-w-screen-md text-white">
			<h2 className="ml-1 mb-2 mt-4 ">
				{date} - Written by {author}
			</h2>
			<div className="border-black border-solid border-2 rounded-lg flex flex-col w-full bg-zinc-800">
				<img
					src={
						imageSrcPath
							? `${imageSrcPath}`
							: "client/public/icons/images/default-image.png"
					}
					alt={title}
				/>
				<div className="p-4">
					<h1 className="text-3xl mb-4">{title}</h1>
					<p className="text-xl">{description}</p>
				</div>
				<div className=" p-4 buttons flex gap-5 text-teal-700">
					<p>SHARE</p>
					<Link to={sourceURL} target="blank">
						<p>READ MORE</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
