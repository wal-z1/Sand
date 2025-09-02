import NavBar from "../Header/Navbar";
function LeftSide() {
	return (
		<div // used only for sizign will changed to empty element later
			// Left Nav buttons moved here (3 buttons: Home, Explore, About + Footer)
			className="border-2 border-amber-100">
			<span className="flex items-center">
				<h3 className=" pl-1.5 pr-0.5 pb-2 font-sora text-sm font-semibold uppercase tracking-widest text-[#A1A1A1]/50">
					Navigation
				</h3>
				<span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C2B280]  "></span>
			</span>
			<NavBar />
		</div>
	);
}

export default LeftSide;
