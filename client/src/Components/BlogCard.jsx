import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function BlogCard({ imageSrcPath, title, date, description, sourceURL }) {
	return (
		<>
			<h2 className="m-4">{date}</h2>
			<div className="border-black border-solid border-2 rounded-lg flex justify-center flex-col w-90 m-4">
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
					<p className="">{description}</p>
				</div>
				<div className=" p-4 buttons flex gap-5 text-teal-700 font-bold">
					<p>SHARE</p>
					<Link to={sourceURL} target="blank">
						<p>READ MORE</p>
					</Link>
				</div>
			</div>
		</>
	);
}

export default BlogCard;
