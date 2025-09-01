import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header
			// bottom border using primarry with less opacity
			// backdrop blur and saturation for better visual effect
			className="sticky top-0 z-50 border-b border-[#C2B280]/40 bg-[#0f0f0f]/50 backdrop-blur-lg backdrop-saturate-150">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link
					to="/"
					// 3. Hover effect changed to brighten instead of darken.
					className="group flex items-center gap-3 transition-all duration-200 ease-in-out">
					<img
						src="/logo.png"
						alt="Sand Logo"
						// Added a subtle white drop shadow (glow) here:
						className="h-9 w-auto transition duration-200 
						            drop-shadow-[0_0_4px_#c2b2806c] 
						            group-hover:brightness-125"
					/>

					<span className="text-xl font-extrabold text-[#EAEAEA] transition-colors duration-200 group-hover:text-white">
						Sand
					</span>
					{/* Nav bar removed, logo moved to left side */}
				</Link>

				<HeaderButtons />
			</div>
		</header>
	);
}
