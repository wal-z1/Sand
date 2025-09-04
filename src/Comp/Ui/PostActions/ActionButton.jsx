import { motion } from "framer-motion";

const ActionButton = ({ icon, count, onClick, label, isInteracted }) => {
	const interactedClasses = isInteracted
		? "bg-[#E5C07B] text-[#0F0F0F]"
		: "text-[#A1A1A1] hover:bg-[#1A1A1A]/50 hover:text-[#C2B280]";

	return (
		<motion.button
			onClick={onClick}
			aria-label={label}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${interactedClasses}`}>
			{icon}
			<span className="font-ibm-mono text-xs font-bold">{count}</span>
		</motion.button>
	);
};

export default ActionButton;
