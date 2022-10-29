import Logo from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Logo",
  component: Logo,
  args: {
    color: "primary",
    hideText: false,
    size: "normal"
  },
  argTypes: {
    color: {
      control: "select"
    },
    size: {
      control: "select"
    }
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args) => (
  <Logo {...args} />
);
