import React from "react";
import { Rect } from "react-konva";

const Rectangle = ({ element }) => {
	return <Rect width={50} height={50} fill={element.color} x={element.x} y={element.y} />;
};

export default Rectangle;
