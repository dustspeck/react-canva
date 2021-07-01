import React from "react";
import ColorPicker from "./ColorPicker";
import ShapesBar from "./ShapesBar";
import BackColorPicker from "./BackColorPicker";

const Toolbox = () => {
	return (
		<div style={{ width: "30vw", height: "92vh", backgroundColor: "#ccc", padding: "4vh" }}>
			<div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
				<div style={{ fontSize: "2rem", marginRight: "1rem" }}>React Canva</div>
				<a href='https://github.com/21vaibhavgarg/react-canva' target='_BLANK' style={{ color: "black", fontWeight: 500 }}>
					(View on GitHub)
				</a>
			</div>
			<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
				<ColorPicker />
				<BackColorPicker />
				<ShapesBar />
			</div>
		</div>
	);
};

export default Toolbox;
