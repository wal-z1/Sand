import PostActions from "./PostActions/PostActions";
import { useState } from "react";
// data porpuse is testing in this case
import dummyPostData from "../../lib/dummyPostData";
import formatRelative from "../../lib/date";
import MediaRenderer from "../../lib/MediaRender";

function PostCard() {
	const [post, setPost] = useState(dummyPostData); //for now
	const handleUpvote = () => {
		setPost((prev) => ({
			...prev,
			isUpvoted: !prev.isUpvoted,
			isDownvoted: false,
		}));
	};

	const handleDownvote = () => {
		setPost((prev) => ({
			...prev,
			isDownvoted: !prev.isDownvoted,
			isUpvoted: false,
		}));
	};

	return (
		<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 sm:p-4 flex flex-col gap-4 transition-colors duration-200 hover:border-[#C2B280]/50">
			{/* Post Header: Author Info */}
			<div className="flex items-center gap-3">
				<img
					src={dummyPostData.author.avatarUrl}
					className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg border-2 border-[#2A2A2A]"
					alt={`${dummyPostData.author.name}'s avatar`}
				/>
				<div className="flex flex-col">
					<span className="font-source-sans font-semibold text-[#EAEAEA] cursor-pointer hover:text-[#C2B280] transition-colors">
						{dummyPostData.author.name}
					</span>
					<span
						className="font-ibm-mono text-xs text-[#A1A1A1] cursor-help"
						title={new Date(dummyPostData.timestamp).toLocaleString()}>
						{formatRelative(dummyPostData.timestamp)}
					</span>
				</div>
			</div>

			{/* Post Content: Title, Body, and Media */}
			<div className="flex flex-col gap-2">
				<h2 className="font-sora font-bold text-lg sm:text-xl text-[#EAEAEA]">
					{dummyPostData.title}
				</h2>
				<p className="font-source-sans text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
					{dummyPostData.body}
				</p>
				<MediaRenderer media={dummyPostData.media} />
			</div>

			{/* Divider */}
			<hr className="w-full border-t border-[#2A2A2A]" />

			{/* Post Actions */}
			<PostActions
				post={post}
				FunUp={handleUpvote}
				FunDown={handleDownvote}
				onCommentClick={() => console.log("Trigger Comment")}
			/>
		</div>
	);
}

export default PostCard;
