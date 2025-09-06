import { useState } from "react";
import { motion } from "framer-motion";
import SortButtonsGroups from "../Ui/SortButtonsGroups";
import PostCard from "../Ui/PostCard";
import dummyPosts from "../../lib/dummyPostData";
import AllPostContainer from "../Ui/AllPostContainer";

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
	const [sortedArray, updatesorted] = useState(
		[...dummyPosts].sort(
			(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
		) // default newest first
	);

	return (
		<div className="mt-1.5">
			<SortButtonsGroups
				onSelect={(val) => {
					console.log("Selected:", val);
					updatesorted((prev) => {
						if (val === "old") {
							return [...prev].sort(
								(a, b) => new Date(a.timestamp) - new Date(b.timestamp)
							);
						} else if (val === "new") {
							return [...prev].sort(
								(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
							);
						} else {
							return [...prev].sort((a, b) => b.ups - a.ups); // top first
						}
					});
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
						{sortedArray.map((p) => (
							<motion.div
								key={p.id}
								variants={postAni}
								layout //  smooth re-sorting upon dom change
							>
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
