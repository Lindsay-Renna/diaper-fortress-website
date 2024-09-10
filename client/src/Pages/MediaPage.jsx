import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
	{
		src: "images/media1.jpg",
		width: 3840,
		height: 5760,
		title: "Puppy in sunglasses",
	},
	{
		src: "images/media2.jpg",
		width: 3840,
		height: 5760,
		title: "Puppy in sunglasses",
	},
	{
		src: "images/media3.jpg",
		width: 3840,
		height: 5760,
		title: "Puppy in sunglasses",
	},
	{
		src: "images/media4.jpg",
		width: 3840,
		height: 5760,
		title: "Puppy in sunglasses",
	},
	{
		src: "images/media5.jpg",
		width: 3840,
		height: 5760,
		title: "Puppy in sunglasses",
	},
	{
		src: "images/media6.jpg",
		width: 3840,
		height: 5760,
		title: "Puppy in sunglasses",
	},
];

const videos = ["QKgTZWbwD1U", "LOhfqjmasi0"];

function MediaPage() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const [imagesRef, imagesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [videosRef, videosInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const openLightbox = (index) => {
		setLightboxOpen(true);
		setIndex(index);
	};

	return (
		<main className="dark:bg-stone-900">
			<div
				ref={imagesRef}
				className={`m-4 sm:mx-8 ${
					imagesInView ? "animate__animated animate__fadeInUpBig" : "opacity-0"
				}`}
			>
				<h1 className="text-3xl mb-3 dark:text-white text-center md:text-left">
					Images
				</h1>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry columnsCount={3} gutter="10px">
						{images.map((image, i) => (
							<img
								key={i}
								src={image.src}
								className="w-full block rounded-lg cursor-pointer"
								onClick={() => openLightbox(i)}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
			<div
				ref={videosRef}
				className={`m-4 mt-12 sm:mx-8 ${
					videosInView ? "animate__animated animate__fadeInUpBig" : "opacity-0"
				}`}
			>
				<h1 className="text-3xl mb-3 dark:text-white text-center md:text-left">
					Videos
				</h1>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
					<Masonry columnsCount={2} gutter="20px">
						{videos.map((video, i) => (
							<iframe
								key={i}
								sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
								src={`https://youtube.com/embed/${video}?autoplay=0`}
								className="w-full h-[400px] block rounded-lg"
							></iframe>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
			<Lightbox
				open={lightboxOpen}
				close={() => setLightboxOpen(false)}
				slides={images}
				plugins={[
					Captions,
					Download,
					Fullscreen,
					Slideshow,
					Thumbnails,
					Video,
					Zoom,
				]}
			/>
		</main>
	);
}

export default MediaPage;
