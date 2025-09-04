import PostActions from "./PostActions/PostActions";
import { useState } from "react";
const dummyPostData = {
	id: "p1",
	author: {
		name: "Alex Martinez",
		avatarUrl: "https://i.pravatar.cc/150?u=alexmartinez",
	},
	timestamp: "2023-10-27T10:30:00Z",
	title: "Exploring the Dunes at Sunrise",
	body: "There is something truly magical about the way the light hits the sand...",
	media: {
		type: "image",
		url: "https://images.unsplash.com/photo-1616272963049-da2d8efc0c57",
	},
	ups: 1247,
	downs: 32,
	comments: 2,
	commentObjects: [
		{
			id: "c1",
			user: "Jane",
			text: "Wow, amazing shot!",
			timestamp: "2023-10-27T11:00:00Z",
		},
		{
			id: "c2",
			user: "Tom",
			text: "I need to go there someday.",
			timestamp: "2023-10-27T11:15:00Z",
		},
	],
	isUpvoted: true, //  toggle these in logic and use usestate
	isDownvoted: false,
	isCommenting: false,
};

function PostCard() {
	const [post, setPost] = useState(dummyPostData);
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
		<div>
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
