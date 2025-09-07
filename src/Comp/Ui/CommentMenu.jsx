import { motion } from "framer-motion";

function CommentMenu({ post }) {
	return (
		<div>
			{post.commentObjects.map((e, idx) => {
				console.log(`Rendering comment ${idx} of post ${post.id}:`, e);

				return (
					<motion.div
						key={e.id}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3 }}
						layout>
						<span>{e.text}</span>
					</motion.div>
				);
			})}
		</div>
	);
}

export default CommentMenu;
