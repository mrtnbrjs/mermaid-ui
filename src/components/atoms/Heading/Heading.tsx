import React from "react";
import {
	Heading as ChakraHeading,
	HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

export interface HeadingProps extends ChakraHeadingProps {}

const Heading: React.FC<HeadingProps> = ({ children, ...rest }) => {
	return <ChakraHeading {...rest}>{children}</ChakraHeading>;
};

export default Heading;
