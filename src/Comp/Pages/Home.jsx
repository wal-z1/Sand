import RightSide from "../Sections/RightSide";
import MainSection from "../Sections/MainSection";
import LeftSide from "../Sections/LeftSide";
import { UseViewContext } from "../../Context/ViewContext";
import { motion } from "framer-motion";

function Home() {
	const { LeftIsHidden } = UseViewContext();

	return (
		<motion.div
			className="font-source-sans sm:grid gap-3 text-[#EAEAEA]"
			initial={{ opacity: 0.97 }}
			animate={{
				opacity: 1,
				// adjust grid columns based on sidebar state
				gridTemplateColumns: LeftIsHidden
					? "65px 3fr 250px"
					: "250px 3fr 250px",
			}}
			// smooth animation
			transition={{ duration: 0.44, ease: "easeInOut" }}>
			<LeftSide />

			<main>
				<MainSection />
			</main>

			{/* right sidebar - hidden on mobile */}
			<aside className="hidden sm:block">
				<RightSide />
			</aside>
		</motion.div>
	);
}

export default Home;
