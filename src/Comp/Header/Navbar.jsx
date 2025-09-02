export default function NavBar() {
	const buttonstyle =
		"w-full rounded-md px-4 py-2 text-left font-source-sans font-medium text-lg text-[#A1A1A1] transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-[#E5C07B] cursor-pointer";

	return (
		<nav className="grid grid-rows-3 gap-2">
			<button className={buttonstyle}>Button 1</button>
			<button className={buttonstyle}>Button 2</button>
			<button className={buttonstyle}>Button 3</button>
		</nav>
	);
}
