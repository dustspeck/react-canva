import React, { useContext, createContext, useState, useEffect } from "react";

export const ArtboardContext = createContext();

export const useArtboard = () => useContext(ArtboardContext);

export const ArtboardProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [selectedColor, setSelectedColor] = useState("black");

	const value = { selectedColor, setSelectedColor };
	// setIsLoading(false);
	return <ArtboardContext.Provider value={value}>{isLoading && children}</ArtboardContext.Provider>;
};
