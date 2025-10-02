import { motion } from "framer-motion";
import LeftSide from "../Sections/LeftSide/LeftSide";
import { UseViewContext } from "../../Context/ViewContext";
import LayoutV1 from "../LayoutV1";

// faq content data
const FAQ_ITEMS = [
	{
		title: "What is SAND?",
		content: (
			<p className="font-lexend">
				<span className="font-sora text-[#E5C07B]">SAND</span> is a social
				platform experiment built around posts, comments, and user connections.
				It's still in development, but the core idea is to create a clean,
				lightweight space for sharing and interacting without unnecessary noise.
			</p>
		),
	},
	{
		title: "What features are being worked on?",
		content: (
			<ul className="list-disc pl-6 space-y-2 font-lexend">
				<li>Authentication: Login, Register, and User Profiles</li>
				<li>Feed & Posting: Submit posts, comments, upvoting</li>
				<li>UI Features: Dark/Light mode toggle, FAQ section</li>
				<li>Social: Following system, messaging, suggested users</li>
				<li>Settings page for account preferences</li>
			</ul>
		),
	},
	{
		title: "What's next?",
		content: (
			<p className="font-lexend">
				Upcoming priorities include polishing the profile pages, completing the
				dark/light theme toggle, and improving the comment/post logic. After
				that, more social features like messaging and following will be added.
			</p>
		),
	},
	{
		title: "How can I contribute or give feedback?",
		content: (
			<p className="font-lexend">
				You can check the{" "}
				<a
					href="https://github.com/wal-z1/Sand/issues"
					target="_blank"
					rel="noopener noreferrer"
					className="underline text-[#C2B280] hover:text-[#E5C07B] transition-colors">
					GitHub Issues
				</a>{" "}
				for open tasks, bugs, and enhancements. Feedback and ideas are welcome
				there. You can also send feedback directly through the website.
			</p>
		),
	},
];

// animated chevron icon for dropdown
const ChevronIcon = () => (
	<motion.svg
		className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M19 9l-7 7-7-7"
		/>
	</motion.svg>
);

// individual faq item component
const FAQItem = ({ title, content, index }) => (
	<motion.details
		key={index}
		initial={{ opacity: 0, y: 20 }} // start hidden and slightly down
		animate={{ opacity: 1, y: 0 }} // fade in and slide up
		transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }} // staggered delay
		className="group [&_summary::-webkit-details-marker]:hidden rounded-2xl 
              border border-[#2A2A2A] bg-[#1A1A1A]/80 
              shadow-xl shadow-black/40 backdrop-blur-sm transition-colors">
		<summary
			className="flex items-center justify-between gap-3 px-5 py-4 
                cursor-pointer select-none w-full
                text-[#EAEAEA] hover:text-[#C2B280] 
                transition-colors duration-200 text-lg">
			<h2 className="font-sora text-xl">{title}</h2>
			<ChevronIcon />
		</summary>

		<motion.div className="px-5 pb-4 pt-2 text-[#A1A1A1] font-lexend text-base leading-relaxed">
			{content}
		</motion.div>
	</motion.details>
);

function About() {
	const { LeftIsHidden } = UseViewContext();

	return (
		<LayoutV1
			left={<LeftSide />}
			main={
				<div className="space-y-6 max-w-2xl mx-auto mt-16">
					{FAQ_ITEMS.map((item, index) => (
						<FAQItem
							key={index}
							title={item.title}
							content={item.content}
							index={index}
						/>
					))}
				</div>
			}
		/>
	);
}

export default About;
