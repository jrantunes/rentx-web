import Header from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Header",
  component: Header
  //args: {}
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => <Header />;
