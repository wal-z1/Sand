import { useState } from "react";

function SortButtonsGroups({ onSelect }) {
	const [open, setOpen] = useState(false);

	//  reusable styles
	const wrapperStyle =
		"flex items-center justify-between mb-1 bg-[#1A1A1A] border border-[#aa9b6c] rounded-lg px-4 py-2 w-[110px] cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:bg-[#2A2A2A] transition";

	const menuStyle =
		"absolute left-0 w-40 rounded-xl border border-[#aa9b6c] bg-[#0f0f0f] shadow-lg overflow-hidden z-10";

	const itemStyle =
		"block w-full text-left px-4 py-2 text-sm text-[#E5C07B] hover:bg-[#1A1A1A] transition cursor-pointer";

	const handleSelect = (value) => {
		setOpen(false); // close the pop up render boolean
		if (onSelect) onSelect(value); // pass the value tot the outside function todo whetever with
	};

	return (
		<div className="relative inline-block text-left">
			{/* close from anywhere on click */}
			{open && (
				<button onClick={() => setOpen(false)} className="fixed inset-0 z-10" />
			)}

			<div onClick={() => setOpen((prev) => !prev)} className={wrapperStyle}>
				<img
					src="/uiicons/sortwhite.png"
					className="object-contain h-5 w-5"
					alt="sort"
				/>
				<span className="font-sora text-sm text-[#E5C07B]">Sort</span>
			</div>
			{/* Dropdown */}
			{open && (
				<div className={menuStyle}>
					<button onClick={() => handleSelect("new")} className={itemStyle}>
						New
					</button>
					<button onClick={() => handleSelect("top")} className={itemStyle}>
						Top
					</button>
					<button onClick={() => handleSelect("old")} className={itemStyle}>
						Old
					</button>
				</div>
			)}
		</div>
	);
}

export default SortButtonsGroups;
