import React, { useEffect, useState, useRef } from "react";
import { Stage, Layer, Text, Rect } from "react-konva";
import { useArtboard } from "../../contexts/ArtboardContext";
import RectangleShape from "../shapes/RectangleShape";
import CircleShape from "../shapes/CircleShape";
import TriangleShape from "../shapes/TriangleShape";
import PentagonShape from "../shapes/PentagonShape";

const Canvas = () => {
	const canvasRef = useRef();

	const [canvasDimensions, setCanvasDimensions] = useState({ width: 500, height: 500 });

	const { canvasColor, selectedColor, selectedShape, elementsData, setElementsData } = useArtboard();

	const handleDraw = (e) => {
		setElementsData([...elementsData, { shape: selectedShape, x: e.evt.offsetX, y: e.evt.offsetY, color: selectedColor }]);
	};

	const handleMouseDown = (item) => {
		console.log(canvasRef.current);
		let index = item.target.index;
		console.log(index);
		let drawnItems = canvasRef.current.children[0].children;
		if (drawnItems[index]) {
			drawnItems[index].moveToTop();
			console.log("to top");
		}
	};

	useEffect(() => {
		setCanvasDimensions({ width: 0.7 * window.innerWidth, height: window.innerHeight - 5 });
	}, []);

	return (
		<Stage width={canvasDimensions.width} height={canvasDimensions.height} ref={canvasRef}>
			<Layer onClick={handleDraw}>
				<Rect width={canvasDimensions.width} height={canvasDimensions.height} fill={canvasColor} />
				<Text text={"Click anywhere to draw. Drag elements to move."} fontSize={15} />
				<Text text={JSON.stringify(elementsData)} fill={selectedColor} y={canvasDimensions.height - 50} />
				{elementsData.map((element) => {
					console.log(elementsData);
					switch (element.shape) {
						default:
							return;
						case "rectangle":
							return <RectangleShape element={element} />;
						case "circle":
							return <CircleShape element={element} handleMouseDown={handleMouseDown} />;
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
