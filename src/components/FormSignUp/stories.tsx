import FormSignUp from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "FormSignUp",
  component: FormSignUp
  //args: {}
} as ComponentMeta<typeof FormSignUp>;

export const Default: ComponentStory<typeof FormSignUp> = () => (
  <div style={{ width: 360, margin: "auto" }}>
    <FormSignUp />
  </div>
);
