import PostActions from "./PostActions";
const dummyPostData = {
	id: "p1",
	author: {
		name: "Alex Martinez",
		avatarUrl: "https://i.pravatar.cc/150?u=alexmartinez",
	},
	timestamp: "2023-10-27T10:30:00Z", // ISO format
	title: "Exploring the Dunes at Sunrise",
	body: "There is something truly magical about the way the light hits the sand in the early morning. The colors are just breathtaking. Highly recommend a trip if you ever get the chance!",
	media: {
		type: "image", // could also be 'video' later
		url: "https://images.unsplash.com/photo-1616272963049-da2d8efc0c57?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	// interaction data is in here so PostActions can consume it directly
	ups: 1247,
	downs: 32,
	comments: [
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
};

function PostCard() {
	return (
		<div>
			PostCard
			<PostActions
				post={dummyPostData}
				FunUp={console.log("UP")}
				FunDown={console.log("down")}
				onCommentClick={console.log("Trigger Comment")}
			/>
		</div>
	);
}

export default PostCard;
