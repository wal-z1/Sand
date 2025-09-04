import { AnimatePresence, motion } from "framer-motion";

function SidebarHeader({ isHidden }) {
	return (
		<div className="flex flex-col pr-2">
			<AnimatePresence>
				{!isHidden ? (
					<motion.div
						className="flex items-center"
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.35, ease: "easeInOut" }}>
						<h3 className="pl-1.5 pr-0.5 pb-2 font-sora text-sm font-semibold uppercase tracking-widest text-[#A1A1A1]/50 mt-1.5">
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
						<h3 className="pl-1.5 pr-0.5 pb-2 font-sora text-sm font-semibold uppercase tracking-widest text-[#A1A1A1]/50">
							navigation
						</h3>
						<span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C2B280]" />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default SidebarHeader;
