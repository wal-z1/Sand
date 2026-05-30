// comment menu
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import formatRelative from "../../lib/date";
import { addComment } from "../../lib/api";
import { useAuth } from "../../Context/AuthContext";

function CommentMenu({ post, onPostUpdated }) {
	const { user } = useAuth();
	const [text, setText] = useState("");
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState("");
	const comments = post.commentObjects || [];

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!user) {
			setError("Sign in to comment.");
			return;
		}
		if (!text.trim()) {
			setError("Comment cannot be empty.");
			return;
		}
		setError("");
		setSaving(true);
		try {
			const updated = await addComment(post.id, text.trim(), user);
			onPostUpdated?.(updated);
			setText("");
		} catch (err) {
			setError(err.message || "Failed to add comment.");
		} finally {
			setSaving(false);
		}
	};

	return (
		<div className="flex flex-col w-full max-h-[80vh] overflow-y-auto pb-4">
			{/* header */}
			<div className="mb-3">
				<h2 className="font-sora text-lg sm:text-xl font-semibold text-[#E5C07B] tracking-wide">
					Comments ({comments.length})
				</h2>
			</div>

			<form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					rows={3}
					placeholder={user ? "Write a comment..." : "Sign in to comment"}
					className="rounded-md border border-[#2A2A2A] bg-[#0F0F0F] px-3 py-2 text-sm text-[#EAEAEA]"
					disabled={!user}
				/>
				<div className="flex items-center justify-between">
					{error && <span className="text-xs text-red-400">{error}</span>}
					<button
						type="submit"
						disabled={saving || !user}
						className="rounded-md bg-[#C2B280] px-4 py-2 text-xs font-semibold text-[#0F0F0F] hover:bg-[#E5C07B] disabled:opacity-60">
						{saving ? "Posting..." : "Post comment"}
					</button>
				</div>
			</form>

			{/* empty */}
			{comments.length === 0 && (
				<div className="text-center text-base text-[#A1A1A1] py-5">
					No comments yet
				</div>
			)}

			{/* list */}
			<div className="flex flex-col gap-3 sm:gap-4">
				<AnimatePresence>
					{comments.map((c, idx) => (
						<motion.div
							key={c.id}
							initial={{ y: 12, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -8, opacity: 0 }}
							transition={{
								duration: 0.25,
								ease: [0.25, 0.1, 0.25, 1],
								delay: idx * 0.04,
							}}
							layout
							className="flex items-start gap-3 sm:gap-3.5 py-1.5 sm:py-2">
							{/* avatar */}
							<img
								src={c.avatarUrl}
								className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2A2A2A] flex-shrink-0"
							/>

							{/* content */}
							<div className="flex flex-col flex-1">
								<div className="flex items-center justify-between">
									<span className="text-sm sm:text-[15px] font-medium text-white tracking-wide">
										{c.user}
									</span>
									<span className="text-xs text-[#9C9C9C]">
										{formatRelative(c.timestamp)}
									</span>
								</div>
								<p className="text-sm sm:text-[15px] leading-snug text-[#F1F1F1] break-words">
									{c.text}
								</p>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default CommentMenu;
