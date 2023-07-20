import React from "react";
import {
	Spinner as ChakraSpinner,
	SpinnerProps as ChakraSpinnerProps,
} from "@chakra-ui/react";

interface SpinnerProps extends ChakraSpinnerProps {}

const Spinner: React.FC<SpinnerProps> = ({ ...rest }) => {
	return <ChakraSpinner {...rest} />;
};

export default Spinner;
