import Heading from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Heading",
  component: Heading,
  args: {
    align: "left",
    color: "white",
    size: "medium",
    children: "RentX"
  },
  argTypes: {
    align: {
      control: "select"
    },
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
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);
