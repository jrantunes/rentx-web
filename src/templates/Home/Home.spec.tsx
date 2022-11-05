import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import carIllustration from "assets/background-car1.png";

import Home from ".";

const props = {
  absoluteImageAltText: "Alternative text",
  absoluteImageURL: carIllustration
};

describe("<Home />", () => {
  it("should render correctly", () => {
    renderWithTheme(<Home {...props} />);

    // Logo
    expect(screen.getByRole("img", { name: /rentx/i })).toBeInTheDocument();

    // Heading
    expect(
      screen.getByRole("heading", {
        name: /Alugue um carro de maneira simples e fácil/i
      })
    ).toBeInTheDocument();

    // Button
    expect(
      screen.getByRole("button", { name: /começar agora/i })
    ).toBeInTheDocument();

    // CarIllustration
    expect(
      screen.getByRole("img", { name: props.absoluteImageAltText })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/background illustration/i)
    ).toBeInTheDocument();
  });
});
