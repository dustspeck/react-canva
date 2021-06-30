import React, { useEffect, useState } from "react";
import { Stage, Layer, Text } from "react-konva";

const Canvas = () => {
	const [canvasDimensions, setCanvasDimensions] = useState({ width: 500, height: 500 });
	useEffect(() => {
		setCanvasDimensions({ width: 0.7 * window.innerWidth, height: window.innerHeight - 5 });
	}, []);
	return (
		<Stage width={canvasDimensions.width} height={canvasDimensions.height}>
			<Layer>
				<Text text='Hello' />
			</Layer>
		</Stage>
	);
};

export default Canvas;
