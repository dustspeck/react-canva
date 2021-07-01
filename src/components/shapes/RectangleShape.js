import React from "react";
import { Rect } from "react-konva";

const RectangleShape = ({ element }) => {
	return <Rect draggable width={50} height={50} fill={element.color} x={element.x} y={element.y} />;
};

export default RectangleShape;
