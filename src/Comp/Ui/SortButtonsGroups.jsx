import { useState } from "react";

function SortButtonsGroups({ onSelect }) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState("new");

	// Styles
	const wrapperStyle = `
		flex items-center justify-between mb-1 bg-[#1A1A1A] border border-[#aa9b6c] 
		rounded-lg px-4 py-2 w-[110px] cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.4)] 
		hover:bg-[#2A2A2A] active:scale-95 active:bg-[#333333] transition
	`;

	const menuStyle = `
		absolute left-0 mt-1 w-44 rounded-xl border border-[#aa9b6c] bg-[#0f0f0f] 
		shadow-[0_4px_12px_rgba(0,0,0,0.6)] overflow-hidden z-20
	`;

	const itemStyle = `
		block w-full text-left px-4 py-3 text-sm font-medium text-[#E5C07B] 
		hover:bg-[#1A1A1A] active:bg-[#2A2A2A] active:scale-95 transition cursor-pointer
	`;

	const handleSelect = (value) => {
		setSelected(value);
		setOpen(false);
		onSelect?.(value); // run our outside function
	};

	return (
		<div className="relative inline-block text-left">
			{/* vlose dropdown when clicking outside */}
			{open && (
				<button onClick={() => setOpen(false)} className="fixed inset-0 z-10" />
			)}

			{/* fropdown trigger */}
			<div onClick={() => setOpen((prev) => !prev)} className={wrapperStyle}>
				<img
					src="/uiicons/sortwhite.png"
					className="object-contain h-5 w-5"
					alt="Sort options"
				/>
				<span className="font-sora text-sm text-[#E5C07B] capitalize">
					{selected}
				</span>
			</div>

			{/* Dropdown menu */}
			{open && (
				<div className={menuStyle}>
					{["new", "top", "old"].map((option) => (
						<button
							key={option}
							onClick={() => handleSelect(option)}
							className={itemStyle}>
							{option.charAt(0).toUpperCase() + option.slice(1)}
						</button>
					))}
				</div>
			)}
		</div>
	);
}

export default SortButtonsGroups;
