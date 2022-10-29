import Logo from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Logo",
  component: Logo
  //args: {}
} as ComponentMeta<typeof Logo>;

export const Basic: ComponentStory<typeof Logo> = () => <Logo />;
//Basic.args = {}

export const Default: ComponentStory<typeof Logo> = () => <Logo />;
