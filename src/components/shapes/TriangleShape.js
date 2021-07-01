import React from "react";
import { Star } from "react-konva";

const TriangleShape = ({ element }) => {
	return <Star draggable numPoints={3} innerRadius={20} outerRadius={40} fill={element.color} x={element.x} y={element.y} />;
};

export default TriangleShape;
