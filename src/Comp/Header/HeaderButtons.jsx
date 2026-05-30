import { useState } from "react";
import Modal from "../Ui/Modal";
import { useAuth } from "../../Context/AuthContext";

export default function HeaderButtons() {
	const { user, signInWithGoogleMock, signOut } = useAuth();
	const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSignIn = async (event) => {
		event.preventDefault();
		if (!name.trim()) {
			setError("Display name is required.");
			return;
		}
		setError("");
		setLoading(true);
		try {
			await signInWithGoogleMock(name.trim());
			setShowModal(false);
			setName("");
		} catch (err) {
			setError(err.message || "Sign in failed.");
		} finally {
			setLoading(false);
		}
	};

	if (user) {
		return (
			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-3 py-1.5">
					<img
						src={user.avatarUrl}
						alt={user.name}
						className="h-7 w-7 rounded-full object-cover"
					/>
					<span className="hidden sm:inline text-sm font-medium text-[#EAEAEA]">
						{user.name}
					</span>
				</div>
				<button
					onClick={signOut}
					className="rounded-md bg-[#C2B280] px-4 py-2 text-sm font-medium text-[#0F0F0F] hover:bg-[#E5C07B] transition">
					Sign out
				</button>
			</div>
		);
	}

	return (
		<div className="flex items-center gap-4">
			<button
				onClick={() => setShowModal(true)}
				className="rounded-md bg-[#C2B280] px-5 py-2.5 text-sm font-medium text-[#0F0F0F] hover:bg-[#E5C07B] focus:bg-[#E5C07B] active:bg-[#E5C07B]/90 transition">
				Continue with Google
			</button>

			<button className="hidden sm:block rounded-md bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#EAEAEA] hover:text-[#E5C07B] transition">
				Register
			</button>

			<Modal bool={showModal} close={() => setShowModal(false)}>
				<form onSubmit={handleSignIn} className="flex flex-col gap-3">
					<h3 className="font-sora text-lg text-[#EAEAEA]">
						Mock Google Sign-In
					</h3>
					<p className="text-sm text-[#A1A1A1]">
						This is a mock flow until a Google client ID is added.
					</p>
					<label className="flex flex-col gap-2 text-sm text-[#EAEAEA]">
						Display name
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="rounded-md border border-[#2A2A2A] bg-[#0F0F0F] px-3 py-2 text-sm text-[#EAEAEA]"
							placeholder="Your name"
						/>
					</label>
					{error && <span className="text-sm text-red-400">{error}</span>}
					<div className="flex items-center justify-end gap-2">
						<button
							type="button"
							onClick={() => setShowModal(false)}
							className="rounded-md border border-[#2A2A2A] px-4 py-2 text-sm text-[#EAEAEA] hover:border-[#C2B280]">
							Cancel
						</button>
						<button
							type="submit"
							disabled={loading}
							className="rounded-md bg-[#C2B280] px-4 py-2 text-sm font-medium text-[#0F0F0F] hover:bg-[#E5C07B] disabled:opacity-60">
							{loading ? "Signing in..." : "Continue"}
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}
