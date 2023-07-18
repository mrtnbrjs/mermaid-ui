// En el archivo CustomButton.tsx
import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

const colorVariants: Record<string, string> = {
	primary: "#006fb9",
	complementary: "#ffdd35",
	white: "#FFFFFF",
	neutral: "#bdbdbd",
	black: "#1b1a16",
	error: "#ba4b44",
	success: "#2e8241",
	warning: "#ab5c00",
	info: "#0076a9",
	sales: "#f44336",
};

const allowedVariants = Object.keys(colorVariants);

interface CustomButtonProps extends ButtonProps {}

const Button: React.FC<CustomButtonProps> = ({ colorScheme, ...rest }) => {
	// Filtra el colorScheme para asegurarte de que solo se utilicen las variantes permitidas.
	const filteredColorScheme = allowedVariants.includes(colorScheme as string)
		? colorScheme
		: "primary";

	const textColor = filteredColorScheme === "white" ? "black" : "white";

	return (
		<ChakraButton
			colorScheme={filteredColorScheme}
			bg={colorVariants[filteredColorScheme]}
			color={textColor}
			{...rest}
		></ChakraButton>
	);
};

export default Button;
