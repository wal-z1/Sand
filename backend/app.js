const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

let userCounter = 1;
let commentCounter = 1;
let postCounter = 7;

const makeUser = (name) => ({
	id: `u${userCounter++}`,
	name,
	avatarUrl: `https://i.pravatar.cc/150?u=${encodeURIComponent(name)}`,
});

const seedPosts = [
	{
		id: "p1",
		author: makeUser("Alex Martinez"),
		timestamp: "2023-10-27T10:30:00Z",
		title: "Exploring the Dunes at Sunrise",
		body: "Morning light over the sand is unreal.",
		media: {
			type: "image",
			url: "https://images.unsplash.com/photo-1616272963049-da2d8efc0c57",
		},
		ups: 1247,
		downs: 32,
		commentObjects: [
			{
				id: "c1",
				user: "Jane",
				avatarUrl: "https://i.pravatar.cc/150?u=jane",
				text: "Amazing light.",
				timestamp: "2023-10-27T11:00:00Z",
			},
		],
		comments: 1,
		votesByUser: {},
	},
	{
		id: "p2",
		author: makeUser("Sophia Lee"),
		timestamp: "2023-11-01T14:20:00Z",
		title: "Street Photography in Tokyo",
		body: "Shibuya back alleys are full of contrast.",
		media: {
			type: "image",
			url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
		},
		ups: 863,
		downs: 14,
		commentObjects: [],
		comments: 0,
		votesByUser: {},
	},
	{
		id: "p3",
		author: makeUser("Liam Johnson"),
		timestamp: "2023-11-05T09:15:00Z",
		title: "Rainy Days and Coffee",
		body: "Window light, rain, and a warm cup.",
		media: {
			type: "video",
			url: "https://videos.pexels.com/video-files/854094/854094-hd_1920_1080_25fps.mp4",
		},
		ups: 542,
		downs: 7,
		commentObjects: [],
		comments: 0,
		votesByUser: {},
	},
];

const posts = [...seedPosts];

const sanitizePost = (post, userId) => {
	const vote = userId ? post.votesByUser[userId] : null;
	return {
		id: post.id,
		author: post.author,
		timestamp: post.timestamp,
		title: post.title,
		body: post.body,
		media: post.media,
		ups: post.ups,
		downs: post.downs,
		commentObjects: post.commentObjects,
		comments: post.commentObjects.length,
		isUpvoted: vote === "up",
		isDownvoted: vote === "down",
		isCommenting: false,
	};
};

const requireUser = (req, res) => {
	const userId = req.header("x-user-id");
	if (!userId) {
		res.status(401).json({ message: "Sign in required." });
		return null;
	}
	return userId;
};

app.get("/api/health", (req, res) => {
	res.json({ status: "ok" });
});

app.get("/api/posts", (req, res) => {
	const sort = (req.query.sort || "new").toLowerCase();
	const userId = req.header("x-user-id");

	const sorted = [...posts].sort((a, b) => {
		if (sort === "old") {
			return new Date(a.timestamp) - new Date(b.timestamp);
		}
		if (sort === "top") {
			return b.ups - a.ups;
		}
		return new Date(b.timestamp) - new Date(a.timestamp);
	});

	res.json(sorted.map((post) => sanitizePost(post, userId)));
});

app.post("/api/posts", (req, res) => {
	const userId = requireUser(req, res);
	if (!userId) return;

	const { title, body } = req.body || {};
	if (!title || !body) {
		res.status(400).json({ message: "Title and body are required." });
		return;
	}

	const author = req.body.author || makeUser("Guest");
	const newPost = {
		id: `p${postCounter++}`,
		author,
		timestamp: new Date().toISOString(),
		title,
		body,
		media: null,
		ups: 0,
		downs: 0,
		commentObjects: [],
		comments: 0,
		votesByUser: {},
	};

	posts.unshift(newPost);
	res.status(201).json(sanitizePost(newPost, userId));
});

app.post("/api/posts/:id/comments", (req, res) => {
	const userId = requireUser(req, res);
	if (!userId) return;

	const { text, user } = req.body || {};
	if (!text) {
		res.status(400).json({ message: "Comment text is required." });
		return;
	}

	const post = posts.find((p) => p.id === req.params.id);
	if (!post) {
		res.status(404).json({ message: "Post not found." });
		return;
	}

	const author = user || makeUser("Guest");
	const comment = {
		id: `c${commentCounter++}`,
		user: author.name,
		avatarUrl: author.avatarUrl,
		text,
		timestamp: new Date().toISOString(),
	};

	post.commentObjects.unshift(comment);
	res.json(sanitizePost(post, userId));
});

app.post("/api/posts/:id/votes", (req, res) => {
	const userId = requireUser(req, res);
	if (!userId) return;

	const { direction } = req.body || {};
	if (!direction || !["up", "down"].includes(direction)) {
		res.status(400).json({ message: "Vote direction must be up or down." });
		return;
	}

	const post = posts.find((p) => p.id === req.params.id);
	if (!post) {
		res.status(404).json({ message: "Post not found." });
		return;
	}

	const current = post.votesByUser[userId] || null;

	if (direction === "up") {
		if (current === "up") {
			post.ups = Math.max(0, post.ups - 1);
			delete post.votesByUser[userId];
		} else {
			if (current === "down") {
				post.downs = Math.max(0, post.downs - 1);
			}
			post.ups += 1;
			post.votesByUser[userId] = "up";
		}
	} else {
		if (current === "down") {
			post.downs = Math.max(0, post.downs - 1);
			delete post.votesByUser[userId];
		} else {
			if (current === "up") {
				post.ups = Math.max(0, post.ups - 1);
			}
			post.downs += 1;
			post.votesByUser[userId] = "down";
		}
	}

	res.json(sanitizePost(post, userId));
});

app.post("/api/auth/mock-google", (req, res) => {
	const { name } = req.body || {};
	if (!name) {
		res.status(400).json({ message: "Name is required." });
		return;
	}

	const user = makeUser(name);
	res.json({ user });
});

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`API server running on http://localhost:${PORT}`);
	});
}

module.exports = app;
