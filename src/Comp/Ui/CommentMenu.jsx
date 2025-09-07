// comment menu
import { motion } from "framer-motion";
import formatRelative from "../../lib/date";

function CommentMenu({ post }) {
	const comments = post.commentObjects || [];

	return (
		<div className="flex flex-col w-full max-h-[80vh] overflow-y-auto pb-4">
			{/* header */}
			<div className="mb-4">
				<h2 className="font-sora text-lg sm:text-xl font-semibold text-[#E5C07B] tracking-wide">
					Comments ({comments.length})
				</h2>
			</div>

			{/* empty */}
			{comments.length === 0 && (
				<div className="text-center text-base text-[#A1A1A1] py-6">
					No comments yet
				</div>
			)}

			{/* list */}
			<div className="flex flex-col gap-5">
				{comments.map((c, idx) => (
					<motion.div
						key={c.id}
						initial={{ y: 8, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.25, delay: idx * 0.05 }}
						layout
						className="flex items-start gap-3">
						{/* avatar placeholder */}
						<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2A2A2A] flex-shrink-0" />

						{/* content */}
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium text-white tracking-wide">
									{c.user}
								</span>
								<span className="text-xs text-[#9C9C9C]">
									{formatRelative(c.timestamp)}
								</span>
							</div>
							<p className="text-md sm:text-xl leading-snug text-[#F1F1F1] break-words">
								{c.text}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default CommentMenu;
