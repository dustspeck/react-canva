import React from "react";

const Button = ({ text, action, isPrimary }) => {
	return (
		<div>
			<div
				style={{
					cursor: "pointer",
					paddingLeft: "1rem",
					paddingRight: "1rem",
					paddingTop: "0.3rem",
					paddingBottom: "0.3rem",
					backgroundColor: "#bbb",
					borderRadius: "1rem",
				}}
				onClick={action}>
				{text}
			</div>
		</div>
	);
};

export default Button;
