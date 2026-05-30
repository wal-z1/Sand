import {
	getStore,
	sanitizePost,
	getUserId,
	readJsonBody,
	sendJson,
	getPathParam,
} from "../../_store.js";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return sendJson(res, 405, { message: "Method not allowed." });
	}

	const userId = getUserId(req);
	if (!userId) {
		return sendJson(res, 401, { message: "Sign in required." });
	}

	const store = getStore();
	const postId = getPathParam(req, "id");
	const post = store.posts.find((item) => item.id === postId);
	if (!post) {
		return sendJson(res, 404, { message: "Post not found." });
	}

	const body = await readJsonBody(req);
	const direction = body?.direction;
	if (!direction || !["up", "down"].includes(direction)) {
		return sendJson(res, 400, {
			message: "Vote direction must be up or down.",
		});
	}

	if (!post.votesByUser) {
		post.votesByUser = {};
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

	return sendJson(res, 200, sanitizePost(post, userId));
}
