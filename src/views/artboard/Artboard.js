import React from "react";
import Canvas from "../../components/artboard/Canvas";
import Toolbox from "../../components/artboard/Toolbox";

const Artboard = () => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<Canvas />
			<Toolbox />
		</div>
	);
};

export default Artboard;
