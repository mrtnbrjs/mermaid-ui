// Importamos las librerías necesarias
import React, { FC, ChangeEvent } from "react";
import {
	Radio as ChakraRadio,
	RadioProps as ChakraRadioProps,
} from "@chakra-ui/react";

// Definimos los tipos de propiedades del componente
interface RadioButtonProps extends ChakraRadioProps {
	label: string;
	isChecked: boolean;
	onChange: (isChecked: boolean) => void;
}

const Radio: FC<RadioButtonProps> = ({
	label,
	isChecked,
	onChange,
	...rest
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
	};

	return (
		<ChakraRadio isChecked={isChecked} onChange={handleChange} {...rest}>
			{label}
		</ChakraRadio>
	);
};

export default Radio;
