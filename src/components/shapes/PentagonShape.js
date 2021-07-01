import React from "react";
import { Star } from "react-konva";

const PentagonShape = ({ element }) => {
	return <Star draggable numPoints={5} innerRadius={32} outerRadius={40} fill={element.color} x={element.x} y={element.y} />;
};

export default PentagonShape;
