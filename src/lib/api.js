const API_BASE = "/api";

const buildHeaders = (user, hasBody) => {
	const headers = {};
	if (hasBody) {
		headers["Content-Type"] = "application/json";
	}
	if (user?.id) {
		headers["x-user-id"] = user.id;
	}
	return headers;
};

const request = async (path, options = {}) => {
	const res = await fetch(`${API_BASE}${path}`, options);
	if (!res.ok) {
		let payload = null;
		try {
			payload = await res.json();
		} catch (err) {
			payload = null;
		}
		throw new Error(payload?.message || "Request failed");
	}
	return res.json();
};

export const fetchPosts = (sort, user) =>
	request(`/posts?sort=${sort}`, {
		headers: buildHeaders(user, false),
	});

export const createPost = (data, user) =>
	request("/posts", {
		method: "POST",
		headers: buildHeaders(user, true),
		body: JSON.stringify(data),
	});

export const addComment = (postId, text, user) =>
	request(`/posts/${postId}/comments`, {
		method: "POST",
		headers: buildHeaders(user, true),
		body: JSON.stringify({ text, user }),
	});

export const votePost = (postId, direction, user) =>
	request(`/posts/${postId}/votes`, {
		method: "POST",
		headers: buildHeaders(user, true),
		body: JSON.stringify({ direction }),
	});

export const mockGoogleSignIn = (name) =>
	request("/auth/mock-google", {
		method: "POST",
		headers: buildHeaders(null, true),
		body: JSON.stringify({ name }),
	});
