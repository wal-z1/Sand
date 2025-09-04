import { motion } from "framer-motion";

function SidebarToggle({ isHidden, onToggle }) {
	return (
		<button
			onClick={() => onToggle((prev) => !prev)}
			className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full border border-[#C2B280] bg-[#1a1a1a] w-6 h-10 flex items-center justify-center transition hover:bg-[#282424] hover:text-[#E5C07B]"
			title={isHidden ? "Expand sidebar" : "Collapse sidebar"}>
			<motion.span
				className="text-lg leading-none text-[#C2B280]"
				animate={{ rotate: isHidden ? 180 : 0 }}
				transition={{ duration: 0.2 }}>
				‹
			</motion.span>
		</button>
	);
}

export default SidebarToggle;
