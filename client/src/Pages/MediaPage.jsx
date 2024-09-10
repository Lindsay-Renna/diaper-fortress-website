import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Modal from "../Components/Modal";

function MediaPage() {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeImage, setActiveImage] = useState(images[0]);

	const [imagesRef, imagesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [videosRef, videosInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

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
								src={image}
								data-modal-target="extralarge-modal"
								data-modal-toggle="extralarge-modal"
								className="w-full block rounded-lg"
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
			<Modal />
		</main>
	);
}

export default MediaPage;
