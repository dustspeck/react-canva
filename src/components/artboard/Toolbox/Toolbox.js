import React from "react";
import ColorPicker from "./ColorPicker";

const Toolbox = () => {
	return (
		<div style={{ width: "30vw", height: "92vh", backgroundColor: "#ccc", padding: "4vh" }}>
			Toolbox
			<ColorPicker />
		</div>
	);
};

export default Toolbox;
