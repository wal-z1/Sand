import SortButtonsGroups from "../Ui/SortButtonsGroups";
import PostCard from "../Ui/PostCard";
import dummyPostData from "../../lib/dummyPostData";
function MainSection() {
	return (
		<div className="mt-1.5">
			<SortButtonsGroups //what to do with the value sekected
				onSelect={(val) => console.log("Selected:", val)}
			/>
			<span className=" flex items-center">
				<span className="shrink-0 pe-4 text-[#EAEAEA] font-sora">Feed</span>
				<span className="h-[1px] flex-1 bg-gradient-to-l from-[#e1e4cc] to-[#C2B280]"></span>
			</span>
			<div>
				{/*Posts container*/}
				<div>
					{/*a post*/}
					<PostCard post={dummyPostData} />
				</div>
			</div>
		</div>
	);
}

export default MainSection;
