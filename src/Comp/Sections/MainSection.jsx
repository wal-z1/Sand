import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SortButtonsGroups from "../Ui/SortButtonsGroups";
import PostCard from "../Ui/PostCard";
import AllPostContainer from "../Ui/AllPostContainer";
import { createPost, fetchPosts } from "../../lib/api";
import { useAuth } from "../../Context/AuthContext";

const postContainerAni = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1, // smooth fade in delayed children on container
		},
	},
};
// post slides from under to up
const postAni = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

function MainSection() {
	const { user } = useAuth();
	const [posts, setPosts] = useState([]);
	const [sort, setSort] = useState("new");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [creating, setCreating] = useState(false);

	const loadPosts = useCallback(async () => {
		setLoading(true);
		setError("");
		try {
			const data = await fetchPosts(sort, user);
			setPosts(data);
		} catch (err) {
			setError(err.message || "Failed to load posts.");
		} finally {
			setLoading(false);
		}
	}, [sort, user]);

	useEffect(() => {
		loadPosts();
	}, [loadPosts]);

	const handleCreatePost = async (event) => {
		event.preventDefault();
		if (!user) {
			setError("Sign in to create a post.");
			return;
		}
		if (!title.trim() || !body.trim()) {
			setError("Title and body are required.");
			return;
		}
		setCreating(true);
		setError("");
		try {
			await createPost(
				{ title: title.trim(), body: body.trim(), author: user },
				user,
			);
			setTitle("");
			setBody("");
			await loadPosts();
		} catch (err) {
			setError(err.message || "Failed to create post.");
		} finally {
			setCreating(false);
		}
	};

	return (
		<div className="mt-1.5">
			<form
				onSubmit={handleCreatePost}
				className="mb-4 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-4">
				<div className="flex items-center justify-between">
					<h3 className="font-sora text-base text-[#EAEAEA]">
						Share something
					</h3>
					{user ? (
						<span className="text-xs text-[#A1A1A1]">
							Posting as {user.name}
						</span>
					) : (
						<span className="text-xs text-[#A1A1A1]">Sign in to post</span>
					)}
				</div>
				<div className="mt-3 flex flex-col gap-3">
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Post title"
						className="rounded-md border border-[#2A2A2A] bg-[#0F0F0F] px-3 py-2 text-sm text-[#EAEAEA]"
					/>
					<textarea
						value={body}
						onChange={(e) => setBody(e.target.value)}
						placeholder="Write your post..."
						rows={4}
						className="rounded-md border border-[#2A2A2A] bg-[#0F0F0F] px-3 py-2 text-sm text-[#EAEAEA]"
					/>
					<div className="flex items-center justify-end">
						<button
							type="submit"
							disabled={creating}
							className="rounded-md bg-[#C2B280] px-4 py-2 text-sm font-medium text-[#0F0F0F] hover:bg-[#E5C07B] disabled:opacity-60">
							{creating ? "Posting..." : "Post"}
						</button>
					</div>
				</div>
				{error && <p className="mt-2 text-sm text-red-400">{error}</p>}
			</form>

			<SortButtonsGroups
				onSelect={(val) => {
					setSort(val);
				}}
			/>
			<span className="flex items-center">
				<span className="shrink-0 pe-4 text-[#EAEAEA] font-sora">Feed</span>
				<span className="h-[1px] flex-1 bg-gradient-to-l from-[#e1e4cc] to-[#C2B280]"></span>
			</span>
			<div>
				<motion.div
					variants={postContainerAni}
					initial="hidden"
					animate="visible">
					<AllPostContainer>
						{loading && (
							<div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-4 text-sm text-[#A1A1A1]">
								Loading posts...
							</div>
						)}
						{!loading && posts.length === 0 && (
							<div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-4 text-sm text-[#A1A1A1]">
								No posts yet. Start the conversation.
							</div>
						)}
						{posts.map((p) => (
							<motion.div key={p.id} variants={postAni} layout>
								<PostCard post={p} />
							</motion.div>
						))}
					</AllPostContainer>
				</motion.div>
			</div>
		</div>
	);
}

export default MainSection;
