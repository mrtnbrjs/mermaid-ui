import React, { FC } from "react";
import {
	Text as ChakraText,
	TextProps as ChakraTextProps,
} from "@chakra-ui/react";

export interface TextProps extends ChakraTextProps {}

const Text: FC<TextProps> = ({ children, ...rest }) => {
	return <ChakraText {...rest}>{children}</ChakraText>;
};

export default Text;
