import React from "react";
import {FormControl,Text,FormHelperText, Input as CustomInput, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {}

const Input: React.FC<CustomInputProps> = ({ children, ...rest }) => {

	return (

		<CustomInput
			// colorScheme={filteredColorScheme}
			// bg={colorVariants[filteredColorScheme]}
			color={"black"}
			{...rest}
        
		/>
       
	);
};

export default Input;
