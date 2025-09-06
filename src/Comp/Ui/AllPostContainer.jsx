function AllPostContainer({ children }) {
	return (
		<div
			className="
				ml-auto mr-6 flex flex-col gap-6 
				p-2 sm:p-3 
				bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl 
				w-full max-w-[800px] lg:max-w-[850px]
			">
			{children}
		</div>
	);
}
export default AllPostContainer;
