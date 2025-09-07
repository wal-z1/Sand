import PostActions from "./PostActions/PostActions";
import { useState } from "react";
import formatRelative from "../../lib/date";
import MediaRenderer from "../../lib/MediaRender";
import CommentMenu from "./CommentMenu";
import Modal from "./Modal";
function PostCard({ post: initialPost }) {
	const [post, setPost] = useState(initialPost); // take from outside now
	const [commentModal, TogglecommentModal] = useState(false); // definition of comment Modal
	const handleUpvote = () => {
		setPost((prev) => {
			if (prev.isUpvoted) {
				return {
					...prev,
					isUpvoted: !prev.isUpvoted,
					isDownvoted: false,
					ups: prev.ups - 1,
				};
			} else {
				return {
					...prev,
					isUpvoted: !prev.isUpvoted,
					isDownvoted: false,
					ups: prev.ups + 1,
				};
			}
		});
	};

	const handleDownvote = () => {
		setPost((prev) => {
			if (prev.isDownvoted) {
				return {
					...prev,
					isDownvoted: !prev.isDownvoted,
					isUpvoted: false,
					downs: prev.downs - 1,
				};
			} else {
				return {
					...prev,
					isDownvoted: !prev.isDownvoted,
					isUpvoted: false,
					downs: prev.downs + 1,
				};
			}
		});
	};

	return (
		<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 sm:p-4 flex flex-col gap-4 transition-colors duration-200 hover:border-[#C2B280]/50">
			{/* post header author info + date posted*/}
			<div className="flex items-center gap-3">
				{/*AVATAR*/}
				<img
					src={post.author.avatarUrl}
					className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg cursor-pointer border-2 border-[#2A2A2A]"
					alt={`${post.author.name}'s avatar`}
				/>
				{/*name + date*/}
				<div className="flex flex-col">
					<span className="font-lexend font-semibold text-[#EAEAEA] cursor-pointer hover:text-[#C2B280] transition-colors ">
						{post.author.name}
					</span>
					<span
						className="font-ibm-mono text-xs text-[#A1A1A1] cursor-help"
						title={new Date(post.timestamp).toLocaleString()}>
						{formatRelative(post.timestamp)}
					</span>
				</div>
			</div>

			{/* content: title, body, and media */}
			<div className="flex flex-col gap-2">
				<h2 className="font-sora font-bold text-lg sm:text-xl text-[#EAEAEA]">
					{post.title}
				</h2>
				<p className="font-lexend text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
					{post.body}
				</p>
				<MediaRenderer media={post.media} />
			</div>

			{/* divider */}
			<hr className="w-full border-t border-[#2A2A2A]" />

			{/* Post Actions */}
			<PostActions
				post={post}
				FunUp={handleUpvote}
				FunDown={handleDownvote}
				onCommentClick={() => {
					console.log("Trigger Comment Post action ", post.id, commentModal);
					TogglecommentModal((prev) => !prev);
				}}
			/>
			<Modal bool={commentModal} close={() => TogglecommentModal()}>
				<CommentMenu post={post}></CommentMenu>
			</Modal>
		</div>
	);
}

export default PostCard;
