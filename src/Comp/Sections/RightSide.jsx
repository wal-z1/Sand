import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//TODO
// place holder array of objects name + state
const onlineContacts = [
	{ name: "Alice", status: "Online" },
	{ name: "Bob", status: "Online" },
	{ name: "Charlie", status: "Away" },
	{ name: "Diana", status: "Online" },
];

function RightSide() {
	return (
		// card container: lighter background, rounded corners padding, and a border
		<motion.div
			className=" bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4  h-fit mt-1.5 mr-1"
			// slide from up
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}>
			{/* title of the card  */}
			<div className="mb-4">
				<h4 className="font-sora font-semibold text-base text-[#EAEAEA]">
					Contacts
				</h4>
				{/* our lovely divider */}
				<div className="mt-2 h-px w-full bg-gradient-to-r from-[#C2B280]/50 to-transparent"></div>
			</div>

			{/* List using maps */}
			<div className="flex flex-col gap-1">
				{onlineContacts.map((contact, index) => (
					<Link
						key={index}
						to="#" // link to user profile in the future
						className="flex items-center justify-between rounded-md p-2 transition-colors duration-150 ease-in-out hover:bg-white/5">
						{/* name */}
						<span className="font-source-sans text-sm text-[#A1A1A1]">
							{contact.name}
						</span>

						{/* status dot */}
						<span
							//boolean to decide
							className={`h-2 w-2 rounded-full ${
								contact.status === "Online" ? "bg-green-500" : "bg-yellow-500"
							}`}
							title={contact.status}></span>
					</Link>
				))}
			</div>
		</motion.div>
	);
}

export default RightSide;
