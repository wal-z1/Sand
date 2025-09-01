export default function HeaderButtons() {
	return (
		<div className="flex items-center gap-4">
			{/* Login Button */}
			<button className="rounded-md bg-[#C2B280] px-5 py-2.5 text-sm font-medium text-[#0F0F0F] hover:bg-[#E5C07B] transition">
				Login
			</button>
			<button className="block  rounded-md bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#EAEAEA] hover:text-[#E5C07B] transition">
				Register
			</button>
		</div>
	);
}
