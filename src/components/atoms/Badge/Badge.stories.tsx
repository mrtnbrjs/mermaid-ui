import React from "react";
import { Story, Meta } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";

export default {
	title: "Atoms/Badge",
	component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

const TemplateVariants: Story<BadgeProps> = (args) => (
	<>
		<Badge colorScheme="primary" {...args}  mb={3}>
			Primary
		</Badge>
        <br/>
		<Badge colorScheme="complementary"  mb={3} {...args}>
			Complementary
		</Badge>
        <br/>
		<Badge colorScheme="white" {...args}  mb={3}>
			White
		</Badge>
        <br/>
		<Badge colorScheme="neutral" {...args}  mb={3}>
			Neutral
		</Badge>
        <br/>
		<Badge colorScheme="black" {...args}  mb={3}>
			Black
		</Badge>
        <br/>
		<Badge colorScheme="error" {...args}  mb={3}>
			Error
		</Badge>
        <br/>
		<Badge colorScheme="success" {...args}  mb={3}>
			Success
		</Badge>
        <br/>
		<Badge colorScheme="warning" {...args}  mb={3}>
			Warning
		</Badge>
        <br/>
		<Badge colorScheme="info" {...args}  mb={3}>
			Info
		</Badge>
        <br/>
		<Badge colorScheme="sales" {...args}  mb={3}>
			Sales
		</Badge>
        <br/>
	</>
);

export const Primary = Template.bind({});
Primary.args = {
	children: "Nuevo",
    
};



export const Variants = TemplateVariants.bind({});
Variants.args = {}