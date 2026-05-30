import { getStore, readJsonBody, sendJson } from "../_store.js";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return sendJson(res, 405, { message: "Method not allowed." });
	}

	const body = await readJsonBody(req);
	const name = body?.name?.trim();
	if (!name) {
		return sendJson(res, 400, { message: "Name is required." });
	}

	const store = getStore();
	const user = store.makeUser(name);
	const token = `mock-${user.id}`;

	return sendJson(res, 200, { user, token });
}
