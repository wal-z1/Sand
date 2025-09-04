import { motion } from "framer-motion";
import { BiSolidUpArrow, BiSolidDownArrow, BiComment } from "react-icons/bi";

// reusable button component for our actions
const ActionButton = ({ icon, count, onClick, label }) => {
	return (
		<motion.button
			onClick={onClick}
			aria-label={label}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-gray-400 transition-colors hover:bg-gray-500/20 hover:text-sand-100">
			{icon}
			<span className="text-xs font-bold">{count}</span>
		</motion.button>
	);
};

const PostActions = ({ post, FunUp, FunDown, onCommentClick }) => {
	// if data exists take it from the post other than that set to zero
	const postData = post || { ups: 0, downs: 0, comments: 0 };

	return (
		<div className="flex items-center">
			{/* Up and donw */}
			<div className="flex items-center rounded-full bg-gray-800/50 p-0.5">
				<ActionButton
					icon={<BiSolidUpArrow size={16} />}
					count={postData.ups}
					onClick={FunUp}
					label="Upvote post"
				/>
				<ActionButton
					icon={<BiSolidDownArrow size={16} />}
					count={postData.downs}
					onClick={FunDown}
					label="Downvote post"
				/>
			</div>

			{/* vertical line */}
			<div className="h-5 w-px bg-gray-700 mx-3" />

			{/* comment Button */}
			<ActionButton
				icon={<BiComment size={16} />}
				count={postData.comments}
				onClick={onCommentClick}
				label="View comments"
			/>
		</div>
	);
};

export default PostActions;
