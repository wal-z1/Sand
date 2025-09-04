import { UseViewContext } from "../../../Context/ViewContext";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";

function LeftSide() {
	const { LeftIsHidden, ToggleLeftHide } = UseViewContext();

	return (
		<>
			<SidebarDesktop isHidden={LeftIsHidden} onToggle={ToggleLeftHide} />
			<SidebarMobile isHidden={LeftIsHidden} onToggle={ToggleLeftHide} />
		</>
	);
}

export default LeftSide;
