import React from "react";
import { Badge as CustomBadge, BadgeProps } from "@chakra-ui/react";

const colorVariants: Record<string, string> = {
	primary: "#b4d5fe",
	complementary: "#ffdd35",
	white: "#FFFFFF",
	neutral: "#EDEEF2",
	black: "#1b1a16",
	error: "#f2dede",
	success: "#2e8241",
	warning: "#ab5c00",
	info: "#0076a9",
	sales: "#f44336",
};

const allowedVariants = Object.keys(colorVariants);

interface CustomBadgeProps extends BadgeProps {}

const Badge: React.FC<CustomBadgeProps> = ({ colorScheme, ...rest }) => {
	const filteredColorScheme = allowedVariants.includes(colorScheme as string)
		? colorScheme
		: "primary";

	const textColor = filteredColorScheme === "white" ? "black" : "white";

	return (
		<CustomBadge
			colorScheme={filteredColorScheme}
			bg={colorVariants[filteredColorScheme]}
			color={textColor}
			{...rest}
            textTransform= "capitalize"
		></CustomBadge>
	);
};

export default Badge;
