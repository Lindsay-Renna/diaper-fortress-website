function AboutPage() {
	return (
		<main
			id="about-page"
			className="px-4 py-8 md:px-8 flex flex-col md:flex-row gap-12 dark:bg-stone-900 dark:text-white"
		>
			<article className="w-full md:w-1/2">
				<h1 className="text-5xl mb-4">Our Story</h1>
				<p className="text-2xl">
					At the heart of our team lies a passion for both creativity and play.
					What started as a light-hearted joke between a few indie game
					developers quickly blossomed into a full-fledged project with a unique
					twist—Project Diaper Fortress. <br /> <br /> Inspired by the classic
					challenge of Dwarf Fortress and infused with the whimsical charm of a
					daycare, our team set out to create a colony simulator unlike any
					other. The team consists of a diverse group of developers, artists,
					and storytellers, each bringing their own unique perspective to the
					game. We are united by a shared vision: to build a world where fantasy
					meets childhood imagination, where players can explore the intricacies
					of managing a bustling daycare in a magical realm. <br /> <br /> Our
					journey began with basic building mechanics and grid-based
					construction, but our ambitions have always been much larger. We aim
					to create a game that not only entertains but also challenges players
					to think strategically and creatively as they navigate the
					complexities of caring for their tiny, magical residents. As we
					continue to develop and refine Diaper Fortress, we are committed to
					maintaining the playful spirit that inspired it. <br />
					<br /> We believe that games should be fun, engaging, and a little bit
					quirky—just like the world we’re building. Whether you’re a seasoned
					gamer or new to colony simulators, we invite you to join us in this
					fantastical adventure and see what’s possible when imagination takes
					the lead.
				</p>
			</article>
			<aside className="flex flex-col gap-8 my-6 w-full md:w-1/2 md:justify-center">
				<img
					className="rounded-xl shadow-md"
					src="/images/preview.jpg"
					alt="some cool image"
				/>
				<img
					className="rounded-xl shadow-md"
					src="/images/concept-sketch.jpg"
					alt="some cool sketch"
				/>
			</aside>
		</main>
	);
}

export default AboutPage;
