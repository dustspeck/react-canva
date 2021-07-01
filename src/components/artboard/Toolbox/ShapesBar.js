import React from "react";
import { useArtboard } from "../../../contexts/ArtboardContext";

const shapes = ["circle", "triangle", "rectangle", "pentagon"];

const ShapesBar = () => {
	const { selectedShape, setSelectedShape } = useArtboard();

	const handleSelectShape = (shape) => {
		setSelectedShape(shape);
	};

	return (
		<div style={{ textAlign: "center", marginTop: "3rem" }}>
			Shapes
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
				{shapes.map((shape, i) => (
					<div key={i.toString()}>
						<div
							style={{ ...styles.shapeIcon, outlineWidth: selectedShape === shape ? 3 : 0 }}
							onClick={() => {
								handleSelectShape(shape);
							}}>
							{shape.toUpperCase()}
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
	},
};

export default ShapesBar;
