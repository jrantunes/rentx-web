import Button from ".";
import { AiOutlineCar } from "react-icons/ai";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "RentX",
    fullWidth: false,
    size: "medium",
    color: "red"
  },
  argTypes: {
    size: {
      control: "select"
    },
    color: {
      control: "select"
    },
    icon: {
      control: false
    },
    as: {
      control: false
    }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const withIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

withIcon.args = {
  icon: <AiOutlineCar />
};

export const asLink: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

asLink.args = {
  as: "a",
  href: "/link"
};
