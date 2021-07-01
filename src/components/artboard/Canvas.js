import React, { useEffect, useState } from "react";
import { Stage, Layer, Text } from "react-konva";
import { useArtboard } from "../../contexts/ArtboardContext";

const Canvas = () => {
	const [canvasDimensions, setCanvasDimensions] = useState({ width: 500, height: 500 });

	const { selectedColor, setSelectedColor, elementsData, setElementsData } = useArtboard();

	useEffect(() => {
		setCanvasDimensions({ width: 0.7 * window.innerWidth, height: window.innerHeight - 5 });
	}, []);
	return (
		<Stage width={canvasDimensions.width} height={canvasDimensions.height}>
			<Layer>
				<Text text={JSON.stringify(elementsData)} fill={selectedColor} />
			</Layer>
		</Stage>
	);
};

export default Canvas;
