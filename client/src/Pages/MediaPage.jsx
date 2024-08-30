import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function MediaPage() {
	const images = [
		"images/media1.jpg",
		"images/media2.jpg",
		"images/media3.jpg",
		"images/media4.jpg",
		"images/media5.jpg",
		"images/media6.jpg",
	];

	const videos = ["QKgTZWbwD1U", "LOhfqjmasi0"];

	return (
		<>
			<div className="m-4">
				<h1 className="text-3xl mb-3">Images</h1>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry columnsCount={3} gutter="10px">
						{images.map((image, i) => (
							<img
								key={i}
								src={image}
								style={{
									width: "100%",
									display: "block",
									borderRadius: "10px",
								}}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
			<div className="m-4">
				<h1 className="text-3xl mb-3">Videos</h1>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
					<Masonry columnsCount={2} gutter="20px">
						{videos.map((video, i) => (
							<iframe
								key={i}
								sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
								src={`https://youtube.com/embed/${video}?autoplay=0`}
								style={{
									width: "100%",
									height: "400px",
									display: "block",
									borderRadius: "10px",
								}}
							></iframe>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</>
	);
}

export default MediaPage;
