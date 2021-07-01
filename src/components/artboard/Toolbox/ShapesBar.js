import React from "react";
import { useArtboard } from "../../../contexts/ArtboardContext";

const shapes = ["circle", "rectangle", "triangle", "pentagon"];

const ShapesBar = () => {
	const { selectedShape, setSelectedShape } = useArtboard();

	const handleSelectShape = (shape) => {
		setSelectedShape(shape);
	};

	return (
		<div style={{ textAlign: "center" }}>
			Shapes
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
				{shapes.map((shape, i) => (
					<div key={i.toString()}>
						<div
							style={{ ...styles.shapeIcon, outlineWidth: selectedShape === shape ? 3 : 0 }}
							onClick={() => {
								handleSelectShape(shape);
							}}>
							{shape}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const styles = {
	shapeIcon: {
		margin: "0.8rem",
		cursor: "pointer",
		outlineStyle: "dashed",
		outlineColor: "black",
		padding: 2,
		paddingLeft: 7,
		paddingRight: 7,
	},
};

export default ShapesBar;
