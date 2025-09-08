// comment menu
import { motion, AnimatePresence } from "framer-motion";
import formatRelative from "../../lib/date";

function CommentMenu({ post }) {
	const comments = post.commentObjects || [];

	return (
		<div className="flex flex-col w-full max-h-[80vh] overflow-y-auto pb-4">
			{/* header */}
			<div className="mb-3">
				<h2 className="font-sora text-lg sm:text-xl font-semibold text-[#E5C07B] tracking-wide">
					Comments ({comments.length})
				</h2>
			</div>

			{/* empty */}
			{comments.length === 0 && (
				<div className="text-center text-base text-[#A1A1A1] py-5">
					No comments yet
				</div>
			)}

			{/* list */}
			<div className="flex flex-col gap-3 sm:gap-4">
				<AnimatePresence>
					{comments.map((c, idx) => (
						<motion.div
							key={c.id}
							initial={{ y: 12, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -8, opacity: 0 }}
							transition={{
								duration: 0.25,
								ease: [0.25, 0.1, 0.25, 1],
								delay: idx * 0.04,
							}}
							layout
							className="flex items-start gap-3 sm:gap-3.5 py-1.5 sm:py-2">
							{/* avatar */}
							<img
								src={c.avatarUrl}
								className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2A2A2A] flex-shrink-0"
							/>

							{/* content */}
							<div className="flex flex-col flex-1">
								<div className="flex items-center justify-between">
									<span className="text-sm sm:text-[15px] font-medium text-white tracking-wide">
										{c.user}
									</span>
									<span className="text-xs text-[#9C9C9C]">
										{formatRelative(c.timestamp)}
									</span>
								</div>
								<p className="text-sm sm:text-[15px] leading-snug text-[#F1F1F1] break-words">
									{c.text}
								</p>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default CommentMenu;
