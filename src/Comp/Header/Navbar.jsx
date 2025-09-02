//icons
import { motion, AnimatePresence } from "framer-motion";
import { UseViewContext } from "../../Context/ViewContext";

const HomeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="h-6 w-6">
		<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
		<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
	</svg>
);

const ExploreIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="h-6 w-6">
		<path
			fillRule="evenodd"
			d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
			clipRule="evenodd"
		/>
	</svg>
);
const AboutIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="h-6 w-6">
		<path
			fillRule="evenodd"
			d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default function NavBar() {
	const buttonstyle =
		"flex w-full items-center gap-3 rounded-md px-4 py-2 font-source-sans font-medium text-lg text-[#A1A1A1] transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-[#E5C07B] cursor-pointer";
	const { LeftIsHidden } = UseViewContext();

	// animation variants for the text
	const textVariant = {
		initial: { opacity: 0, x: -20 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -20 },
		transition: { duration: 0.2, ease: "easeInOut" },
	};

	return (
		<nav className="grid grid-rows-3 gap-2">
			<button className={buttonstyle} title="Go to Home">
				<HomeIcon />
				<AnimatePresence>
					{!LeftIsHidden && (
						<motion.span
							variants={textVariant}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={textVariant.transition}>
							Home
						</motion.span>
					)}
				</AnimatePresence>
			</button>

			<button className={buttonstyle} title="Explore content">
				<ExploreIcon />
				<AnimatePresence>
					{!LeftIsHidden && (
						<motion.span
							variants={textVariant}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={textVariant.transition}>
							Explore
						</motion.span>
					)}
				</AnimatePresence>
			</button>

			<button className={buttonstyle} title="Learn more about sand">
				<AboutIcon />
				<AnimatePresence>
					{!LeftIsHidden && (
						<motion.span
							variants={textVariant}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={textVariant.transition}>
							About
						</motion.span>
					)}
				</AnimatePresence>
			</button>
		</nav>
	);
}