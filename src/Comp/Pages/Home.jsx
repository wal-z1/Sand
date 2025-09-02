import RightSide from "../Sections/RightSide";
import MainSection from "../Sections/MainSection";
import LeftSide from "../Sections/LeftSide";
import { UseViewContext } from "../../Context/ViewContext";
import { motion } from "framer-motion";

function Home() {
	const { LeftIsHidden } = UseViewContext();
	return (
		<>
			{/*we are deviding the website into 3 secitions left and righ and middle
					a grid is better 

			*/}
			<motion.div
				className="font-source-sans grid  gap-3 text-[#EAEAEA] mt-1.5"
				// animate the grid-cols based on the LeftIsHidden state
				animate={{
					gridTemplateColumns: LeftIsHidden
						? "80px 3fr 1fr" // collapsed : sidebar is a fixed 80px wide
						: "250px 3fr 1fr", // expanded : sidebar is 250px wide
				}}
				// a smooth transition
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
				}}>
				<LeftSide />
				<div className="border-2 border-amber-100">
					- **Section 2: Sorting Bar** - Options: New | Top | Hot - **Section 3:
					Post Feed** - Post item: Title, content preview, author, timestamp -
					Actions: Upvote / Downvote, Comment count{" "}
				</div>
				<div className="border-2 border-amber-100">
					People TO contact with and are online
				</div>
			</motion.div>
		</>
	);
}

export default Home;
