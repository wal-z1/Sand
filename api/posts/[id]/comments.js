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
	const text = body?.text?.trim();
	if (!text) {
		return sendJson(res, 400, { message: "Comment text is required." });
	}

	const author = body?.user || store.makeUser("Guest");
	const comment = {
		id: `c${store.commentCounter++}`,
		user: author.name,
		avatarUrl: author.avatarUrl,
		text,
		timestamp: new Date().toISOString(),
	};

	post.commentObjects.unshift(comment);
	return sendJson(res, 200, sanitizePost(post, userId));
}
