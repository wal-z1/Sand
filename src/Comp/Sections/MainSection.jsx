import SortButtonsGroups from "../Ui/SortButtonsGroups";
import PostCard from "../Ui/PostCard";
import dummyPosts from "../../lib/dummyPostData";
import AllPostContainer from "../Ui/AllPostContainer";
import { useState } from "react";

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
				<AllPostContainer>
					{sortedArray.map((p) => (
						<PostCard key={p.id} post={p} />
					))}
				</AllPostContainer>
			</div>
		</div>
	);
}

export default MainSection;
