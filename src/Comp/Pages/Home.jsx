import RightSide from "../Sections/RightSide";
import MainSection from "../Sections/MainSection";
import LeftSide from "../Sections/LeftSide/LeftSide";
import LayoutV1 from "../LayoutV1";

function Home() {
	return (
		<LayoutV1
			left={<LeftSide />}
			right={<RightSide />}
			main={<MainSection />}
		/>
	);
}

export default Home;
