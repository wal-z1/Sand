function AllPostContainer({ children }) {
	return (
		<div className="w-full mx-auto flex flex-col gap-6 p-3 sm:p-4 bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl">
			{children}
		</div>
	);
}

export default AllPostContainer;
