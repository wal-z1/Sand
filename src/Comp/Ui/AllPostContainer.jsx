function AllPostContainer({ children }) {
	return (
		<div
			className="
				mx-auto flex flex-col gap-6 
				p-2 sm:p-3 
				bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl 
				w-full max-w-[900px] lg:max-w-[1000px]
			">
			{children}
		</div>
	);
}

export default AllPostContainer;
