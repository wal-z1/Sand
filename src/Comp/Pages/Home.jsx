function Home() {
	return (
		<>
			{/*we are deviding the website into 3 secitions left and righ and middle
					a grid is better 
			*/}
			<div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
				{/*placeholder for sizing
				 */}
				<div className="bg-red-500">Left</div>
				<div className="bg-green-500">Middle</div>
				<div className="bg-blue-500">Right</div>
			</div>
		</>
	);
}

export default Home;
