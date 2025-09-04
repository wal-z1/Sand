import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../../Header/Navbar";
import SideFooter from "../../Ui/SideFooter";

function SidebarMobile({ isHidden, onToggle }) {
	return (
		<AnimatePresence>
			{!isHidden && (
				<motion.div
					className="sm:hidden fixed inset-0 z-40 flex"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					
					{/* backdrop */}
					<motion.button
						onClick={() => onToggle(true)}
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
						transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}>
						
						<button
							onClick={() => onToggle(true)}
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
	);
}

export default SidebarMobile;
