import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import formatRelative from "../../lib/date";
import { motion, AnimatePresence } from "framer-motion";
import { UseViewContext } from "../../Context/ViewContext";

// icons
const SettingsIcon = (
	<img
		src="https://img.icons8.com/?size=100&id=364&format=png&color=ffffff"
		alt="Settings"
		className="h-4 w-4"
	/>
);

const CodeIcon = (
	<img
		src="https://img.icons8.com/?size=100&id=sGQ4JZXIk7ES&format=png&color=ffffff"
		alt="FeedBack"
		className="h-4 w-4"
	/>
);

const FeedbackIcon = (
	<img
		src="https://img.icons8.com/?size=100&id=143&format=png&color=ffffff"
		alt="FeedBack"
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

	// medium muted text with the gold hover and flex centred with the icon aligned left
	const linkStyle =
		"flex items-center gap-2 px-2 py-1 font-source-sans text-sm font-medium text-[#A1A1A1] transition-colors duration-200 ease-in-out hover:text-[#E5C07B] text-left whitespace-nowrap";

	return (
		<AnimatePresence>
			{!LeftIsHidden ? (
				<motion.footer
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2, ease: "easeInOut" }}
					// vertical center with a bit of padding incase
					className="mt-auto px-2 pt-4 ">
					{/*
						TODO STICK TO SCREEN BOTTOM
				*/}
					{/* Divider */}
					<div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2B280]/50 to-transparent"></div>

					{/* Links */}
					<div //top space flex vertical and a small gap
						className="mt-4 flex flex-col gap-1">
						<Link // insert icon then text
							to="/settings"
							title="Settings"
							className={linkStyle}>
							{SettingsIcon}
							<span>Settings</span>
						</Link>

						<Link
							to="/feedbackpage"
							title="Feedback Page"
							className={linkStyle}>
							{FeedbackIcon}
							<span>Give Feedback</span>
						</Link>

						<a
							href="https://github.com/wal-z1/Sand"
							target="_blank"
							title="Github Page"
							className={linkStyle}>
							{CodeIcon}
							<span>Source Code</span>
						</a>
					</div>

					{/* Footer info */}
					<p className="whitespace-nowrap mt-4 text-left font-ibm-mono text-xs text-[#A1A1A1]/40">
						Last updated: [{CommitDate}]
					</p>
					<p className="whitespace-nowrap mt-1 px-2 mb-2 text-left font-ibm-mono text-xs text-[#A1A1A1]/40">
						© 2025 Sand
					</p>
				</motion.footer>
			) : null}
		</AnimatePresence>
	);
}
