import FormSignIn from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "FormSignIn",
  component: FormSignIn
  //args: {}
} as ComponentMeta<typeof FormSignIn>;

export const Default: ComponentStory<typeof FormSignIn> = () => (
  <div style={{ width: 360, margin: "auto" }}>
    <FormSignIn />
  </div>
);
