import { Link } from "react-router-dom";
const Date = 2025;
// use a fetch for the commits 

// icons
const SettingsIcon = (
	<img
		src="https://img.icons8.com/?size=100&id=364&format=png&color=ffffff"
		alt="Settings"
		className="h-4 w-4"
	/>
);

const CodeIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="h-4 w-4"
		title="Source Code">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
		/>
	</svg>
);

const FeedbackIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="h-4 w-4"
		title="Give Feedback">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 11.55c0 2.252.992 4.31 2.616 5.765L4 21l5.742-1.848A9.003 9.003 0 0012 20.25z"
		/>
	</svg>
);

export default function SideFooter() {
	// medium muted text with the gold hover and flex centred with the icon aligned left
	const linkStyle =
		"flex items-center gap-2 px-2 py-1 font-source-sans text-sm font-medium text-[#A1A1A1] transition-colors duration-200 ease-in-out hover:text-[#E5C07B] text-left";

	return (
		<footer className="mt-auto px-2 pt-4 ">
			{/* Divider */}
			<div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2B280]/50 to-transparent"></div>

			{/* Links */}
			<div //top space lfex vertical and a small gap
				className="mt-4 flex flex-col gap-1">
				<Link // insert icon then text
					to="/settings"
					className={linkStyle}>
					{SettingsIcon}
					<span>Settings</span>
				</Link>

				<Link to="/feedbackpage" className={linkStyle}>
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
			<p className="mt-4 px-2 text-left font-ibm-mono text-xs text-[#A1A1A1]/40">
				© 2025 Sand |
			</p>
			<p className=" mt-1 mb-2 text-left font-ibm-mono text-xs text-[#A1A1A1]/40">
				Last updated: [{Date}]
			</p>
		</footer>
	);
}
