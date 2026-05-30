import { Buffer } from "node:buffer";

const createStore = () => {
	const store = {
		userCounter: 1,
		commentCounter: 1,
		postCounter: 7,
		posts: [],
	};

	store.makeUser = (name) => ({
		id: `u${store.userCounter++}`,
		name,
		avatarUrl: `https://i.pravatar.cc/150?u=${encodeURIComponent(name)}`,
	});

	store.posts = [
		{
			id: "p1",
			author: store.makeUser("Alex Martinez"),
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
			votesByUser: {},
		},
		{
			id: "p2",
			author: store.makeUser("Sophia Lee"),
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
			votesByUser: {},
		},
		{
			id: "p3",
			author: store.makeUser("Liam Johnson"),
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
			votesByUser: {},
		},
	];

	return store;
};

export const getStore = () => {
	if (!globalThis.__sandStore) {
		globalThis.__sandStore = createStore();
	}
	return globalThis.__sandStore;
};

export const sanitizePost = (post, userId) => {
	const vote = userId ? post.votesByUser?.[userId] : null;
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

export const getUserId = (req) => {
	const header = req.headers?.["x-user-id"];
	if (Array.isArray(header)) {
		return header[0] || null;
	}
	return header || null;
};

export const getQueryParam = (req, name) => {
	if (req.query && req.query[name] != null) {
		const value = req.query[name];
		return Array.isArray(value) ? value[0] : value;
	}
	const host = req.headers?.host || "localhost";
	const url = new URL(req.url || "", `http://${host}`);
	return url.searchParams.get(name);
};

export const getPathParam = (req, name) => {
	if (req.query && req.query[name] != null) {
		const value = req.query[name];
		return Array.isArray(value) ? value[0] : value;
	}
	const host = req.headers?.host || "localhost";
	const url = new URL(req.url || "", `http://${host}`);
	const parts = url.pathname.split("/").filter(Boolean);
	const postsIndex = parts.indexOf("posts");
	if (postsIndex !== -1 && parts[postsIndex + 1]) {
		return parts[postsIndex + 1];
	}
	return null;
};

export const sendJson = (res, status, payload) => {
	res.statusCode = status;
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(payload));
};

export const readJsonBody = async (req) => {
	if (req.body && typeof req.body === "object") {
		return req.body;
	}
	const chunks = [];
	for await (const chunk of req) {
		chunks.push(chunk);
	}
	if (chunks.length === 0) {
		return {};
	}
	const text = Buffer.concat(chunks).toString("utf8");
	if (!text) {
		return {};
	}
	try {
		return JSON.parse(text);
	} catch {
		return {};
	}
};
