import {
	getStore,
	sanitizePost,
	getUserId,
	readJsonBody,
	sendJson,
	getQueryParam,
} from "./_store.js";

export default async function handler(req, res) {
	const store = getStore();
	if (req.method === "GET") {
		const sort = (getQueryParam(req, "sort") || "new").toLowerCase();
		const userId = getUserId(req);
		const sorted = [...store.posts].sort((a, b) => {
			if (sort === "old") {
				return new Date(a.timestamp) - new Date(b.timestamp);
			}
			if (sort === "top") {
				return b.ups - a.ups;
			}
			return new Date(b.timestamp) - new Date(a.timestamp);
		});

		return sendJson(
			res,
			200,
			sorted.map((post) => sanitizePost(post, userId)),
		);
	}

	if (req.method === "POST") {
		const userId = getUserId(req);
		if (!userId) {
			return sendJson(res, 401, { message: "Sign in required." });
		}

		const body = await readJsonBody(req);
		const title = body?.title?.trim();
		const text = body?.body?.trim();
		if (!title || !text) {
			return sendJson(res, 400, {
				message: "Title and body are required.",
			});
		}

		const author = body?.author || store.makeUser("Guest");
		const newPost = {
			id: `p${store.postCounter++}`,
			author,
			timestamp: new Date().toISOString(),
			title,
			body: text,
			media: null,
			ups: 0,
			downs: 0,
			commentObjects: [],
			votesByUser: {},
		};

		store.posts.unshift(newPost);
		return sendJson(res, 201, sanitizePost(newPost, userId));
	}

	return sendJson(res, 405, { message: "Method not allowed." });
}
