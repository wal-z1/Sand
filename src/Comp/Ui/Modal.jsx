import { AnimatePresence, motion } from "framer-motion";

function Modal({ bool, close, children }) {
	return (
		<AnimatePresence>
			{bool && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-50 flex items-center justify-center
					w-screen h-screen backdrop-blur-[1px] 
					">
					{/* backdrop */}
					<motion.button
						onClick={() => close(false)}
						className="absolute inset-0 bg-black/50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.45 }}
						exit={{ opacity: 0 }}
					/>
					{/*frame*/}
					<motion.span
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						className="p-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg sm:p-4 flex flex-col gap-4 transition-colors duration-200 hover:border-[#C2B280]/50 z-50 w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto">
						{children}
					</motion.span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Modal;
