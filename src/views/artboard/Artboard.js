import React from "react";
import Canvas from "../../components/artboard/Canvas";
import Toolbox from "../../components/artboard/Toolbox/Toolbox";
import { ArtboardProvider } from "../../contexts/ArtboardContext";

const Artboard = () => {
	return (
		<ArtboardProvider>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Canvas />
				<Toolbox />
			</div>
		</ArtboardProvider>
	);
};

export default Artboard;
