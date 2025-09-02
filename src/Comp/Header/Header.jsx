import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";
import { UseViewContext } from "../../Context/ViewContext";

export default function Header() {
	const { LeftIsHidden, ToggleLeftHide } = UseViewContext();

	return (
		// header container with sticky top and backdrop effects
		<header className="sticky top-0 z-50 border-b border-[#C2B280]/40 bg-[#0f0f0f]/50 backdrop-blur-lg backdrop-saturate-150">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
				
				{/* left section: hamburger menu + logo */}
				<div className="flex items-center gap-3">
					{/* mobile hamburger button */}
					<button
						onClick={() => ToggleLeftHide(prev => !prev)}
						className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-[#C2B280] hover:bg-white/5"
						aria-label={LeftIsHidden ? "Open menu" : "Close menu"}
						title={LeftIsHidden ? "Open menu" : "Close menu"}>
						
						{/* toggle icon */}
						{LeftIsHidden ? (
							// hamburger icon
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						) : (
							// close icon
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						)}
					</button>

					{/* logo link */}
					<Link
						to="/"
						className="flex items-center gap-3 filter transition duration-500 ease-in-out hover:brightness-125">
						<img src="/logo.png" alt="Sand Logo" className="h-9 w-auto drop-shadow-[0_0_4px_#c2b2806c]" />
						<span className="text-xl font-extrabold text-[#EAEAEA] transition-colors duration-500 ease-in-out hover:text-white">
							Sand
						</span>
					</Link>
				</div>

				{/* right section: header buttons */}
				<HeaderButtons />
			</div>
		</header>
	);
}
