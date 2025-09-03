import SortButtonsGroups from "../Ui/SortButtonsGroups";
function MainSection() {
	return (
		<div className="mt-1.5">
			<SortButtonsGroups />
			<span class=" flex items-center">
				<span class="shrink-0 pe-4 text-[#EAEAEA] font-sora">Feed</span>
				<span class="h-[1px] flex-1 bg-gradient-to-l from-[#e1e4cc] to-[#C2B280]"></span>
			</span>
		</div>
	);
}

export default MainSection;
