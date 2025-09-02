import NavBar from "../Header/Navbar";
import SideFooter from "../Ui/SideFooter";
import { motion } from "framer-motion";
import { UseViewContext } from "../../Context/ViewContext";

function LeftSide() {
	const { LeftIsHidden, ToggleLeftHide } = UseViewContext();

	return (
		<div className="relative border-r border-[#aa9b6c]">
			<button
				// simplified the toggle logic
				onClick={() => ToggleLeftHide((prev) => !prev)}
				className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full border border-[#C2B280] bg-[#1a1a1a] transition-all duration-200 ease-in-out hover:bg-[#282424] hover:text-[#E5C07B] py-3 "
				title={LeftIsHidden ? "Expand Sidebar" : "Collapse Sidebar"}>
				{/* The arrow now rotates */}
				<motion.span
					className="block h-4 w-4 text-lg leading-none text-[#C2B280]"
					animate={{ rotate: LeftIsHidden ? 180 : 0 }}
					transition={{ duration: 0.2 }}>
					‹
				</motion.span>
			</button>

			{/* The pr-2 was moved to a container inside to stop the button from shifting */}
			<aside className="flex h-full flex-col">
				<div className="pr-2">
					<span className="flex items-center">
						<h3 className="pl-1.5 pr-0.5 pb-2 font-sora text-sm font-semibold uppercase tracking-widest text-[#A1A1A1]/50">
							Navigation
						</h3>
						<span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C2B280]" />
					</span>
					<NavBar />
				</div>
				<SideFooter />
			</aside>
		</div>
	);
}

export default LeftSide;
