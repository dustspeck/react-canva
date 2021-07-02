import React from "react";
import { useArtboard } from "../../../contexts/ArtboardContext";
import Button from "../../Button";

const ActionButtons = () => {
	const { clearCanvas } = useArtboard();
	return (
		<div style={{ marginTop: "3rem", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
			<Button text='Clear' action={clearCanvas} />
		</div>
	);
};

export default ActionButtons;
