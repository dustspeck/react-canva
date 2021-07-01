import React from "react";
import { Circle } from "react-konva";

const CircleShape = ({ element }) => {
	return <Circle draggable x={element.x} y={element.y} radius={25} fill={element.color} />;
};

export default CircleShape;
