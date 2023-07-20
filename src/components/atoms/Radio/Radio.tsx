import React, { FC, ChangeEvent } from "react";
import {
	Radio as ChakraRadio,
	RadioProps as ChakraRadioProps,
} from "@chakra-ui/react";

export interface RadioButtonProps extends Omit<ChakraRadioProps, "onChange"> {
	label: string;
	isChecked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Ajustamos para recibir el evento
}

const Radio: FC<RadioButtonProps> = ({
	label,
	isChecked,
	onChange,
	...rest
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e); // Pasamos el evento completo
	};

	return (
		<ChakraRadio isChecked={isChecked} onChange={handleChange} {...rest}>
			{label}
		</ChakraRadio>
	);
};

export default Radio;
