import React from "react";
import { useArtboard } from "../../../contexts/ArtboardContext";

const colors = ["#ededed", "#B7FBFF", "#FFF6BE", "#FFA1AC", "#CDF0EA"];

const BackColorPicker = () => {
	const { canvasColor, setCanvasColor } = useArtboard();

	const handleColorPick = (color) => {
		setCanvasColor(color);
	};

	return (
		<div style={{ textAlign: "center", marginTop: "3rem" }}>
			Canvas Colors
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
				{colors.map((color, i) => (
					<div key={i.toString()}>
						<div
							style={{
								...styles.colorPickerIcon,
								backgroundColor: color,
								borderWidth: canvasColor === color ? 3 : 0,
							}}
							onClick={() => {
								handleColorPick(color);
							}}
						/>
						{color.toUpperCase()}
					</div>
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
		borderColor: "pink",
		borderStyle: "dashed",
	},
};

export default BackColorPicker;
