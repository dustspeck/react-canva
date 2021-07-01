import React from "react";

const colors = ["red", "green", "blue", "white", "black"];

const ColorPicker = () => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			{colors.map((e, i) => (
				<div key={i.toString()} style={{ ...styles.colorPickerIcon, backgroundColor: e }}></div>
			))}
		</div>
	);
};

const styles = {
	colorPickerIcon: {
		height: 50,
		width: 50,
		margin: "0.8rem",
		cursor: "pointer",
	},
};

export default ColorPicker;
