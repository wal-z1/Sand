import { motion } from "framer-motion";
import { UseViewContext } from "../Context/ViewContext";

function PageLayout({ left, main, right }) {
	const { LeftIsHidden } = UseViewContext();

	return (
		<motion.div
			className="font-lexend sm:grid gap-3 text-[#EAEAEA]"
			initial={{ opacity: 0.97 }}
			animate={{
				opacity: 1,
				gridTemplateColumns: LeftIsHidden
					? "65px 3fr 250px"
					: "250px 3fr 250px",
			}}
			transition={{ duration: 0.44, ease: "easeInOut" }}>
			{left}
			<main>{main}</main>
			{right && <aside className="hidden sm:block">{right}</aside>}
		</motion.div>
	);
}

export default PageLayout;
