import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiOutlineMail } from "react-icons/ai";
import TextField from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    label: "Label",
    labelFor: "input",
    placeholder: "Placeholder",
    disabled: false,
    iconPosition: "left"
  },
  argTypes: {
    labelFor: {
      control: false
    },
    icon: {
      control: false
    },
    error: {
      control: false
    },
    initialValue: {
      control: false
    },
    iconPosition: {
      control: "select"
    }
  }
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 340, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const withIcon: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 340, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withIcon.args = {
  icon: <AiOutlineMail />
};

export const withError: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 340, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  error: "Algum erro aconteceu!",
  initialValue: "Errou!!!",
  icon: <AiOutlineMail />
};

withError.argTypes = {
  disabled: {
    control: false
  },
  error: {
    control: "string"
  }
};
