import React from "react";
import { useArtboard } from "../../../contexts/ArtboardContext";

const colors = ["red", "green", "blue", "white", "black"];

const ColorPicker = () => {
	const { selectedColor, setSelectedColor } = useArtboard();

	const handleColorPick = (color) => {
		setSelectedColor(color);
	};

	return (
		<div style={{ textAlign: "center" }}>
			Colors
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
				{colors.map((color, i) => (
					<div
						key={i.toString()}
						style={{ ...styles.colorPickerIcon, backgroundColor: color }}
						onClick={() => {
							handleColorPick(color);
						}}
					/>
				))}
			</div>
		</div>
	);
};

const styles = {
	colorPickerIcon: {
		height: 50,
		width: 50,
		margin: "0.8rem",
		cursor: "pointer",
		borderRadius: 10,
	},
};

export default ColorPicker;
