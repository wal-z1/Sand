import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header
			//TODO ADD DARK MODE TOGGLE BUTTON
			// bottom border using primarry with less opacity
			// backdrop blur and saturation for better visual effect
			className="sticky top-0 z-50 border-b border-[#C2B280]/40 bg-[#0f0f0f]/50 backdrop-blur-lg backdrop-saturate-150">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link
					to="/"
					// 3. Hover effect changed to brighten instead of darken.
					className="flex items-center gap-3 filter transition duration-500 ease-in-out hover:brightness-130">
					<img
						src="/logo.png"
						alt="Sand Logo"
						className="h-9 w-auto 
             drop-shadow-[0_0_4px_#c2b2806c] "
					/>
					<span className="text-xl font-extrabold text-[#EAEAEA] transition-colors duration-500 ease-in-out hover:text-white">
						Sand
					</span>
					{/* Nav bar removed, logo moved to left side */}
				</Link>

				<HeaderButtons />
			</div>
		</header>
	);
}
