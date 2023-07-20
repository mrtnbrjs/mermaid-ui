import React, { FC, ChangeEvent } from "react";
import {
	Checkbox as ChakraCheckbox,
	CheckboxProps as ChakraCheckboxProps,
} from "@chakra-ui/react";

export interface CheckboxProps extends Omit<ChakraCheckboxProps, "onChange"> {
	label: string;
	isChecked: boolean;
	onChange: (isChecked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
	label,
	isChecked,
	onChange,
	...rest
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
	};

	return (
		<ChakraCheckbox isChecked={isChecked} onChange={handleChange} {...rest}>
			{label}
		</ChakraCheckbox>
	);
};

export default Checkbox;
