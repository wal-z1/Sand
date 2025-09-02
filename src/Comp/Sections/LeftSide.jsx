import NavBar from "../Header/Navbar";
import SideFooter from "../Ui/SideFooter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function LeftSide() {
	const [LeftIsHidden, ToggleLeftHide] = useState(true); //TODO SAVE IN LOCAL STORAGE THIS
	return (
		<AnimatePresence>
			<div className="relative border-r border-[#aa9b6c]">
				<button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#1a1a1a] border border-[#C2B280] p-1 transition-all duration-200 ease-in-out hover:bg-[#282424] hover:text-[#E5C07B] cursor-pointer">
					<span className="w-4 h-4 text-[#C2B280] text-lg leading-none">‹</span>
				</button>
				<aside className="pr-2">
					<span className="flex items-center">
						<h3 className="pl-1.5 pr-0.5 pb-2 font-sora text-sm font-semibold uppercase tracking-widest text-[#A1A1A1]/50">
							Navigation
						</h3>
						<span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C2B280]" />
					</span>
					<NavBar />
					<SideFooter />
				</aside>
			</div>
		</AnimatePresence>
	);
}

export default LeftSide;
