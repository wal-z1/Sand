import NavBar from "./NavBar";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
	return (
		<header className="sticky top-0 bg-[#0f0f0f71] border-b border-[hsl(0,0%,20%)] font-source-sans font-bold backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/*div to center the buttons and logo*/}
				<div className="flex items-center gap-8">
					<a href="#">
						<img
							src="/logo.png"
							alt="Sand Logo"
							className="h-10 w-auto transition duration-300 ease-in-out hover:drop-shadow-[0_0px_2px_#E5C07B]"
						/>
					</a>
					<NavBar />
				</div>
				{/*  login buttons */}
				<HeaderButtons />
			</div>
		</header>
	);
}
