import PostActions from "./PostActions/PostActions";
import { useState } from "react";
// data porpuse is testing in this case
import dummyPostData from "../../lib/dummyPostData";

function PostCard() {
	const [post, setPost] = useState(dummyPostData); //for now
	const handleUpvote = () => {
		setPost((prev) => ({
			...prev,
			isUpvoted: !prev.isUpvoted,
			isDownvoted: false, // always clear downvote when toggling up
		}));
	};

	const handleDownvote = () => {
		setPost((prev) => ({
			...prev,
			isDownvoted: !prev.isDownvoted,
			isUpvoted: false, // always clear upvote when toggling down
		}));
	};

	return (
		<div
			// post + its actions
			className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 h-fit mt-1.5 flex flex-col">
			<div
				//actual post
				className=" ">
				<span
					className=" font-source-sans leading-relaxed font-medium "
					//what author + post date
				>
					{" "}
					{dummyPostData.author}{" "}
				</span>
			</div>
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
