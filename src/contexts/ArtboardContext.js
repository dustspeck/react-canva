import React, { useContext, createContext, useState, useEffect } from "react";

export const ArtboardContext = createContext();

export const useArtboard = () => useContext(ArtboardContext);

export const ArtboardProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [selectedColor, setSelectedColor] = useState("black");
	const [selectedShape, setSelectedShape] = useState(null);
	const [elementsData, setElementsData] = useState([]);

	const value = { selectedColor, setSelectedColor, selectedShape, setSelectedShape, elementsData, setElementsData };
	// setIsLoading(false);
	return <ArtboardContext.Provider value={value}>{isLoading && children}</ArtboardContext.Provider>;
};
