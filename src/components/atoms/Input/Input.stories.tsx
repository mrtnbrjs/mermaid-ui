import React from "react";
import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
	title: "Atoms/Input",
	component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

const TemplateVariants: Story<InputProps> = (args) => (
	<>
		<Input size={"xs"} display="block" mb={3}  {...args} placeholder="Extra small" />
        <Input size={"sm"} display="block" mb={3} {...args}  placeholder="Small size"/>
        <Input size={"md"} display="block" mb={3} {...args}  placeholder="Medium size"/>
        <Input size={"lg"} display="block" mb={3} {...args}  placeholder="Large size"/>
        <Input variant='outline' placeholder='Outline' display="block" mb={3} {...args} />
        <Input variant='filled' placeholder='Filled' display="block" mb={3} {...args} />
        <Input variant='flushed' placeholder='Flushed' display="block" mb={3} {...args} />
        <Input variant='unstyled' placeholder='Unstyled' display="block" mb={3} {...args} />
	</>
);

export const Primary = Template.bind({});
Primary.args = {
    
};



export const Variants = TemplateVariants.bind({});
Variants.args = {}