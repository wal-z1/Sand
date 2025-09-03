import NavBar from "../Header/Navbar";
import SideFooter from "../Ui/SideFooter";
import { AnimatePresence, motion } from "framer-motion";
import { UseViewContext } from "../../Context/ViewContext";

function LeftSide() {
	const { LeftIsHidden, ToggleLeftHide } = UseViewContext();

	return (
		<>
			{/* desktop / tablet sidebar */}
			<aside
				className="hidden sm:flex flex-col sticky top-18 border-r border-[#aa9b6c] bg-[#0f0f0f]"
				style={{ height: "calc(100vh - 5rem)" }}>
				{/* toggle button */}
				<button
					onClick={() => ToggleLeftHide((prev) => !prev)}
					className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full border border-[#C2B280] bg-[#1a1a1a] py-3 transition hover:bg-[#282424] hover:text-[#E5C07B]"
					title={LeftIsHidden ? "Expand sidebar" : "Collapse sidebar"}>
					<motion.span
						className="block h-4 w-4 text-[#C2B280]"
						animate={{ rotate: LeftIsHidden ? 180 : 0 }}
						transition={{ duration: 0.2 }}>
						‹
					</motion.span>
				</button>

				{/* sidebar content */}
				<div className="flex flex-col pr-2">
					<AnimatePresence>
						{!LeftIsHidden ? (
							<motion.div
								className="flex items-center"
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.35, ease: "easeInOut" }}>
								<h3 className="pl-1.5 pr-0.5 pb-2 font-sora text-sm font-semibold uppercase tracking-widest text-[#A1A1A1]/50">
									navigation
								</h3>
								<span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C2B280]" />
							</motion.div>
						) : (
							<motion.div
								className="flex items-center"
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{ duration: 0.35, ease: "easeInOut" }}>
								<h3 className="pl-1.5 pr-0.5 pb-2 font-sora text-sm font-semibold uppercase tracking-widest text-[#A1A1A1]/50 ">
									navigation
								</h3>
								<span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C2B280]" />
							</motion.div>
						)}
					</AnimatePresence>

					<NavBar />
				</div>

				<SideFooter />
			</aside>

			{/* mobile sidebar */}
			<AnimatePresence>
				{!LeftIsHidden && (
					<motion.div
						className="sm:hidden fixed inset-0 z-40 flex"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						{/* backdrop */}
						<motion.button
							onClick={() => ToggleLeftHide(true)}
							className="absolute inset-0 bg-black/50"
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.45 }}
							exit={{ opacity: 0 }}
							aria-label="close menu"
						/>

						{/* slide-in panel */}
						<motion.aside
							className="mt-3 relative z-50 w-72 max-w-full bg-[#0f0f0f] border-r border-[#aa9b6c] p-4"
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}>
							{/* close button */}
							<button
								onClick={() => ToggleLeftHide(true)}
								className="mb-3 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5"
								aria-label="close menu">
								✕ close
							</button>

							<h3 className="pl-0 pb-2 font-sora text-xs font-semibold uppercase tracking-widest text-[#A1A1A1]/60">
								navigation
							</h3>

							<NavBar />
							<div className="mt-6">
								<SideFooter />
							</div>
						</motion.aside>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default LeftSide;
