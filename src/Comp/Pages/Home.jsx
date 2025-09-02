function Home() {
	return (
		<>
			{/*we are deviding the website into 3 secitions left and righ and middle
					a grid is better 
			*/}
			<div className="font-source-sans grid grid-cols-[1fr_3fr_1fr] gap-4 text-[#EAEAEA]">
				{/*placeholder for sizing
				 */}
				<div className="bg-red-500">
					Left Nav buttons moved here (3 buttons: Home, Explore, About + Footer){" "}
				</div>
				<div className="bg-green-500">
					- **Section 2: Sorting Bar** - Options: New | Top | Hot - **Section 3:
					Post Feed** - Post item: Title, content preview, author, timestamp -
					Actions: Upvote / Downvote, Comment count{" "}
				</div>
				<div className="bg-blue-500">People TO contact with and are online</div>
			</div>
		</>
	);
}

export default Home;
