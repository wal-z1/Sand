//  user class =====
class User {
	constructor(name, avatarUrl) {
		this.name = name;
		this.avatarUrl = avatarUrl;
	}
}

// ===== comment Class =====
class Comment {
	constructor(id, user, text, timestamp) {
		// backwards compatibility
		this.id = id;
		this.user = user.name;
		this.text = text;
		this.timestamp = timestamp;

		// new structured field
		this.userObj = user;
		this.avatarUrl = this.userObj.avatarUrl;
	}
}

// post class
class Post {
	constructor({
		id,
		author,
		timestamp,
		title,
		body,
		media,
		ups,
		downs,
		commentObjects,
		isUpvoted,
		isDownvoted,
		isCommenting,
	}) {
		this.id = id;
		this.author = author;
		this.timestamp = timestamp;
		this.title = title;
		this.body = body;
		this.media = media;
		this.ups = ups;
		this.downs = downs;

		//  comments always synced with actual length
		this.commentObjects = commentObjects;
		this.comments = commentObjects.length;

		this.isUpvoted = isUpvoted;
		this.isDownvoted = isDownvoted;
		this.isCommenting = isCommenting;
	}
}

// ===== Dummy Data =====
const dummyPosts = [
	new Post({
		id: "p1",
		author: new User(
			"Alex Martinez",
			"https://i.pravatar.cc/150?u=alexmartinez"
		),
		timestamp: "2023-10-27T10:30:00Z",
		title: "Exploring the Dunes at Sunrise",
		body: "There is something truly magical about the way the light hits the sand...",
		media: {
			type: "image",
			url: "https://images.unsplash.com/photo-1616272963049-da2d8efc0c57",
		},
		ups: 1247,
		downs: 32,
		commentObjects: [
			new Comment(
				"c1",
				new User("Jane", "https://i.pravatar.cc/150?u=jane"),
				"Wow, amazing shot!",
				"2023-10-27T11:00:00Z"
			),
			new Comment(
				"c2",
				new User("Tom", "https://i.pravatar.cc/150?u=tom"),
				"I need to go there someday.",
				"2023-10-27T11:15:00Z"
			),
		],
		isUpvoted: true,
		isDownvoted: false,
		isCommenting: false,
	}),
	new Post({
		id: "p2",
		author: new User("Sophia Lee", "https://i.pravatar.cc/150?u=sophialee"),
		timestamp: "2023-11-01T14:20:00Z",
		title: "Street Photography in Tokyo",
		body: "Capturing the hidden beauty in Shibuya’s back alleys was such a fun challenge.",
		media: {
			type: "image",
			url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
		},
		ups: 863,
		downs: 14,
		commentObjects: [
			new Comment(
				"c1",
				new User("Kenji", "https://i.pravatar.cc/150?u=kenji"),
				"Love the framing here!",
				"2023-11-01T15:00:00Z"
			),
		],
		isUpvoted: false,
		isDownvoted: false,
		isCommenting: false,
	}),
	new Post({
		id: "p3",
		author: new User("Liam Johnson", "https://i.pravatar.cc/150?u=liamjohnson"),
		timestamp: "2023-11-05T09:15:00Z",
		title: "Rainy Days & Coffee",
		body: "Nothing beats sitting by the window, hearing the rain, and sipping warm coffee.",
		media: {
			type: "video",
			url: "https://www.pexels.com/download/video/9507463/",
		},
		ups: 542,
		downs: 7,
		commentObjects: [
			new Comment(
				"c1",
				new User("Emma", "https://i.pravatar.cc/150?u=emma"),
				"This feels so cozy ❤️",
				"2023-11-05T09:30:00Z"
			),
		],
		isUpvoted: false,
		isDownvoted: true,
		isCommenting: false,
	}),
	new Post({
		id: "p4",
		author: new User("Nora Smith", "https://i.pravatar.cc/150?u=norasmith"),
		timestamp: "2023-11-08T20:45:00Z",
		title: "Night Sky over the Desert",
		body: "I tried long-exposure for the first time. The stars were unbelievable!",
		media: {
			type: "image",
			url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
		},
		ups: 2031,
		downs: 44,
		commentObjects: [
			new Comment(
				"c1",
				new User("Carlos", "https://i.pravatar.cc/150?u=carlos"),
				"The Milky Way looks insane here 🔥",
				"2023-11-08T21:00:00Z"
			),
		],
		isUpvoted: false,
		isDownvoted: false,
		isCommenting: false,
	}),
	new Post({
		id: "p5",
		author: new User("David Chen", "https://i.pravatar.cc/150?u=davidchen"),
		timestamp: "2023-11-10T18:00:00Z",
		title: "Ocean Waves Timelapse",
		body: "Spent the evening capturing the motion of the ocean. The sound was just as incredible as the view.",
		media: {
			type: "video",
			url: "https://videos.pexels.com/video-files/854094/854094-hd_1920_1080_25fps.mp4",
		},
		ups: 1589,
		downs: 21,
		commentObjects: [],
		isUpvoted: true,
		isDownvoted: false,
		isCommenting: false,
	}),
	new Post({
		id: "p6",
		author: new User(
			"Isabella Rossi",
			"https://i.pravatar.cc/150?u=isabellarossi"
		),
		timestamp: "2023-11-12T11:55:00Z",
		title: "Autumn in the City",
		body: "The colors in the park were absolutely stunning today. A perfect fall afternoon.",
		media: {
			type: "video",
			url: "https://www.pexels.com/download/video/1777892/",
		},
		ups: 987,
		downs: 11,
		commentObjects: [],
		isUpvoted: false,
		isDownvoted: false,
		isCommenting: false,
	}),
];

export default dummyPosts;
