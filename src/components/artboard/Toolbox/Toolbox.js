import React from "react";
import ColorPicker from "./ColorPicker";
import ShapesBar from "./ShapesBar";

const Toolbox = () => {
	return (
		<div style={{ width: "30vw", height: "92vh", backgroundColor: "#ccc", padding: "4vh" }}>
			Toolbox
			<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "90%" }}>
				<ColorPicker />
				<ShapesBar />
			</div>
		</div>
	);
};

export default Toolbox;
