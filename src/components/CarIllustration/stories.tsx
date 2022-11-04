import CarIllustration from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import backgroundCarIllustration from "assets/background-car1.png";
import backgroundCarIllustration2 from "assets/background-car2.png";

export default {
  title: "CarIllustration",
  component: CarIllustration,
  args: {
    backgroundElementColor: "primary",
    absoluteImageURL: backgroundCarIllustration,
    backgroundElementOpacity: "100%",
    absoluteImageAltText: "Alternative text"
  },
  argTypes: {
    backgroundElementColor: {
      control: "select"
    },
    backgroundElementOpacity: {
      control: "select"
    },
    absoluteImageURL: {
      options: [backgroundCarIllustration, backgroundCarIllustration2],
      control: "select"
    }
  }
} as ComponentMeta<typeof CarIllustration>;

export const Default: ComponentStory<typeof CarIllustration> = (args) => (
  <div style={{ maxWidth: 600 }}>
    <CarIllustration {...args} />
  </div>
);
