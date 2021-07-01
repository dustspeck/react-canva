import React, { useEffect, useState } from "react";
import { Stage, Layer, Text, Rect } from "react-konva";
import { useArtboard } from "../../contexts/ArtboardContext";
import RectangleShape from "../shapes/RectangleShape";
import CircleShape from "../shapes/CircleShape";
import TriangleShape from "../shapes/TriangleShape";
import PentagonShape from "../shapes/PentagonShape";

const Canvas = () => {
	const [canvasDimensions, setCanvasDimensions] = useState({ width: 500, height: 500 });

	const { selectedColor, selectedShape, elementsData, setElementsData } = useArtboard();

	const handleDraw = (e) => {
		console.log(selectedShape);
		console.log(e.evt.offsetX, e.evt.offsetY);
		setElementsData([...elementsData, { shape: selectedShape, x: e.evt.offsetX, y: e.evt.offsetY, color: selectedColor }]);
	};

	useEffect(() => {
		setCanvasDimensions({ width: 0.7 * window.innerWidth, height: window.innerHeight - 5 });
	}, []);

	return (
		<Stage width={canvasDimensions.width} height={canvasDimensions.height}>
			<Layer onClick={handleDraw}>
				<Rect width={canvasDimensions.width} height={canvasDimensions.height} fill='#ededed' />
				<Text text={JSON.stringify(elementsData)} fill={selectedColor} />
				{elementsData.map((element) => {
					switch (element.shape) {
						default:
							return;
						case "rectangle":
							return <RectangleShape element={element} />;
						case "circle":
							return <CircleShape element={element} />;
						case "triangle":
							return <TriangleShape element={element} />;
						case "pentagon":
							return <PentagonShape element={element} />;
					}
				})}
			</Layer>
		</Stage>
	);
};

export default Canvas;
