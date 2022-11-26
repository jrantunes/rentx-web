import HeaderUser from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "HeaderUser",
  component: HeaderUser,
  args: {
    userImageUrl: "",
    userName: ""
  }
} as ComponentMeta<typeof HeaderUser>;

export const Default: ComponentStory<typeof HeaderUser> = (args) => (
  <HeaderUser {...args} />
);

export const withAuth: ComponentStory<typeof HeaderUser> = (args) => (
  <HeaderUser {...args} />
);

withAuth.args = {
  userName: "Authenticated User",
  userImageUrl:
    "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
};

withAuth.argTypes = {
  userName: {
    control: false
  },
  userImageUrl: {
    control: false
  }
};
