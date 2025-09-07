import { AnimatePresence, motion } from "framer-motion";

function Modal({ bool, close, children }) {
	return (
		<AnimatePresence>
			{bool && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center  w-screen h-screen">
					{/* backdrop as an animated blur is better */}
					<motion.button
						onClick={() => close(false)}
						className="absolute inset-0 bg-black/50"
						initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
						animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
						exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					/>

					{/* frame i used spring which is better for pop ups */}
					<motion.span
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: "spring", stiffness: 220, damping: 20 }}
						className="p-4 sm:p-6 bg-[#1A1A1A] border border-[#2A2A2A] 
						rounded-xl flex flex-col gap-4 transition-colors duration-200 
						hover:border-[#C2B280]/40 z-50 w-[85%] max-w-3xl 
						max-h-[80vh] overflow-y-auto overscroll-contain 
						shadow-lg shadow-black/40">
						{children}
					</motion.span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Modal;
