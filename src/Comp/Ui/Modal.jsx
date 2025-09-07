import { AnimatePresence, motion } from "framer-motion";
function Modal({ bool, close }) {
	return (
		<AnimatePresence>
			{bool && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-50 flex items-center justify-center
					w-screen h-screen backdrop-blur-[1px] backdrop-brightness-90
					backdrop-saturate-95">
					test
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Modal;
