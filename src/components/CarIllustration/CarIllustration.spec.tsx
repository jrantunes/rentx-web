import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import backgroundCarIllustration from "assets/background-car1.png";

import CarIllustration from ".";

describe("<CarIllustration />", () => {
  it("should render the background svg element and absolute image", () => {
    renderWithTheme(
      <CarIllustration
        absoluteImageURL={backgroundCarIllustration}
        absoluteImageAltText="Absolute Image"
      />
    );

    const absoluteImg = screen.getByAltText(/absolute image/i);
    const backgroundIllustration = screen.getByLabelText(
      /background illustration/i
    );

    expect(absoluteImg).toBeInTheDocument();
    expect(absoluteImg).toHaveStyle({
      position: "absolute"
    });
    expect(backgroundIllustration).toBeInTheDocument();
  });

  it("should render the background svg element with red color and 100% opacity", () => {
    renderWithTheme(
      <CarIllustration
        absoluteImageURL={backgroundCarIllustration}
        absoluteImageAltText="Absolute Image"
      />
    );

    const backgroundIllustration = screen.getByLabelText(
      /background illustration/i
    );
    const gradientATop = screen.getByLabelText(/Gradient A Top Stop Element/i);
    const gradientBTop = screen.getByLabelText(/Gradient B Top Stop Element/i);

    expect(backgroundIllustration.parentElement).toHaveStyle({
      color: "#DC1637"
    });
    expect(gradientATop).toHaveAttribute("stop-opacity", "100%");
    expect(gradientBTop).toHaveAttribute("stop-opacity", "100%");
  });

  it("should render the background svg element with gray color", () => {
    renderWithTheme(
      <CarIllustration
        backgroundElementColor="gray700"
        absoluteImageURL={backgroundCarIllustration}
        absoluteImageAltText="Absolute Image"
      />
    );

    const backgroundIllustration = screen.getByLabelText(
      /background illustration/i
    );

    expect(backgroundIllustration.parentElement).toHaveStyle({
      color: "#47474D"
    });
  });

  it("should render the background svg element with 50% opacity", () => {
    renderWithTheme(
      <CarIllustration
        backgroundElementOpacity="50%"
        absoluteImageURL={backgroundCarIllustration}
        absoluteImageAltText="Absolute Image"
      />
    );

    const gradientATop = screen.getByLabelText(/Gradient A Top Stop Element/i);
    const gradientBTop = screen.getByLabelText(/Gradient B Top Stop Element/i);

    expect(gradientATop).toHaveAttribute("stop-opacity", "50%");
    expect(gradientBTop).toHaveAttribute("stop-opacity", "50%");
  });
});
