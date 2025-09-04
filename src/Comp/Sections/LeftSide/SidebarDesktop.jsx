import SidebarToggle from "./SidebarToggle";
import SidebarHeader from "./SidebarHeader";
import NavBar from "../../Header/Navbar";
import SideFooter from "../../Ui/SideFooter";

function SidebarDesktop({ isHidden, onToggle }) {
	return (
		<aside className="hidden sm:flex flex-col sticky top-16 h-[calc(100vh-4.2rem)] border-r border-[#aa9b6c] bg-[#0f0f0f]">
			<SidebarToggle isHidden={isHidden} onToggle={onToggle} />
			<SidebarHeader isHidden={isHidden} />
			<NavBar />
			<SideFooter />
		</aside>
	);
}

export default SidebarDesktop;
