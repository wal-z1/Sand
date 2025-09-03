import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import formatRelative from "../../lib/date";
import { motion, AnimatePresence } from "framer-motion";
import { UseViewContext } from "../../Context/ViewContext";

const SettingsIcon = () => (
	<img
		src="https://img.icons8.com/?size=100&id=364&format=png&color=ffffff"
		alt="Settings"
		className="h-4 w-4"
	/>
);
const CodeIcon = () => (
	<img
		src="https://img.icons8.com/?size=100&id=sGQ4JZXIk7ES&format=png&color=ffffff"
		alt="Source Code"
		className="h-4 w-4"
	/>
);
const FeedbackIcon = () => (
	<img
		src="https://img.icons8.com/?size=100&id=143&format=png&color=ffffff"
		alt="Feedback"
		className="h-4 w-4"
	/>
);

export default function SideFooter() {
	const [CommitDate, AssignCommitDate] = useState("Loading...");
	async function fetchCommits() {
		try {
			const res = await fetch(
				"https://api.github.com/repos/wal-z1/Sand/commits"
			);
			const data = await res.json();
			const latestDate = data[0].commit.author.date;

			AssignCommitDate((prev) => formatRelative(latestDate));
		} catch (err) {
			console.error(err);
			AssignCommitDate((prev) => "Error Fetching Data");
		}
	}

	useEffect(() => {
		fetchCommits();
	}, []);
	const { LeftIsHidden } = UseViewContext();

	const linkStyle =
		"flex items-center gap-2 px-2 py-1 font-source-sans text-sm font-medium text-[#A1A1A1] transition-colors duration-200 ease-in-out hover:text-[#E5C07B] text-left whitespace-nowrap";

	const textAnimation = {
		initial: { opacity: 0, x: -10 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -10 },
		transition: { duration: 0.2, ease: "easeInOut" },
	};

	return (
		<footer className="mt-auto px-2 pt-4">
			{/* Divider is always visible */}
			<div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2B280]/50 to-transparent"></div>

			<div className="mt-4 flex flex-col gap-1">
				<Link to="/settings" title="Settings" className={linkStyle}>
					<SettingsIcon />
					<AnimatePresence>
						{!LeftIsHidden && (
							<motion.span {...textAnimation}>Settings</motion.span>
						)}
					</AnimatePresence>
				</Link>

				<Link to="/feedbackpage" title="Feedback Page" className={linkStyle}>
					<FeedbackIcon />
					<AnimatePresence>
						{!LeftIsHidden && (
							<motion.span {...textAnimation}>Give Feedback</motion.span>
						)}
					</AnimatePresence>
				</Link>

				<a
					href="https://github.com/wal-z1/Sand"
					target="_blank"
					rel="noopener noreferrer"
					title="Github Page"
					className={linkStyle}>
					<CodeIcon />
					<AnimatePresence>
						{!LeftIsHidden && (
							<motion.span {...textAnimation}>Source Code</motion.span>
						)}
					</AnimatePresence>
				</a>
			</div>

			<AnimatePresence>
				{!LeftIsHidden && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<p className="whitespace-nowrap mt-4 text-left font-ibm-mono text-xs text-[#A1A1A1]/40">
							Last updated: [{CommitDate}]
						</p>
						<p className="whitespace-nowrap mt-1 px-2 mb-2 text-left font-ibm-mono text-xs text-[#A1A1A1]/40">
							© 2025 Sand
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</footer>
	);
}
