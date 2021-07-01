import React, { useContext, createContext, useState, useEffect } from "react";

export const ArtboardContext = createContext();

export const useArtboard = () => useContext(ArtboardContext);

export const ArtboardProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [canvasColor, setCanvasColor] = useState("#ededed");
	const [selectedColor, setSelectedColor] = useState("black");
	const [selectedShape, setSelectedShape] = useState("circle");
	const [elementsData, setElementsData] = useState([]);

	const clearCanvas = () => {
		setElementsData([]);
	};

	const value = {
		clearCanvas,
		canvasColor,
		setCanvasColor,
		selectedColor,
		setSelectedColor,
		selectedShape,
		setSelectedShape,
		elementsData,
		setElementsData,
	};
	// setIsLoading(false);
	return <ArtboardContext.Provider value={value}>{isLoading && children}</ArtboardContext.Provider>;
};
