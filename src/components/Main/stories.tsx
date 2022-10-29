import Main from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "Default title",
    description: "Default description"
  }
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;
Basic.args = {
  title: "Basic title",
  description: "Basic description"
};

export const Default: ComponentStory<typeof Main> = (args) => (
  <Main {...args} />
);
