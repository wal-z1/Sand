import { BiSolidUpArrow, BiSolidDownArrow, BiComment } from "react-icons/bi";
import ActionButton from "./ActionButton";

const PostActions = ({ post, FunUp, FunDown, onCommentClick }) => {
	return (
		<div className="flex flex-wrap items-center gap-3 p-1 font-source-sans text-sm">
			{/* Upvote + Downvote */}
			<div className="flex items-center rounded-full bg-surface border border-border p-0.5">
				<ActionButton
					icon={<BiSolidUpArrow size={16} />}
					count={post.ups}
					onClick={FunUp}
					label="Upvote post"
					isInteracted={post.isUpvoted}
				/>
				<ActionButton
					icon={<BiSolidDownArrow size={16} />}
					count={post.downs}
					onClick={FunDown}
					label="Downvote post"
					isInteracted={post.isDownvoted}
				/>
			</div>

			{/* Divider */}
			<div className="hidden sm:block h-6 w-px bg-border" />

			{/* Comments */}
			<div className="rounded-full bg-surface border border-border p-0.5">
				<ActionButton
					icon={<BiComment size={16} />}
					count={post.comments}
					onClick={onCommentClick}
					label="View comments"
					isInteracted={post.isCommenting}
				/>
			</div>
		</div>
	);
};

export default PostActions;
