import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="bg-stone-800 text-slate-200 flex p-4 justify-between items-center">
			<aside className="items-center">
				<p>Offblast Softworks © 2024 - All right reserved</p>
			</aside>
			<div className="socials flex p-4 justify-around">
				<Link to="https://mstdn.social/@offblastsoftworks">
					<img
						className="w-8 h-8"
						src="/icons/mastodon-logo.svg"
						alt="mastodon icon"
					/>
				</Link>
				<Link to="https://x.com/OffblastSW/?prefetchTimestamp=1722128338645">
					<img className="w-8 h-8" src="/icons/x-logo.svg" alt="x icon" />
				</Link>
				<Link to="https://www.instagram.com/offblastsoftworks/">
					<img
						className="w-8 h-8"
						src="/icons/instagram-logo.svg"
						alt="instagram icon"
					/>
				</Link>
				<Link to="https://discord.gg/MtNqZ5xqfA">
					<img
						className="w-8 h-8 ml-1"
						src="/icons/discord-logo.svg"
						alt="discord icon"
					/>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
