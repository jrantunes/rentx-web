import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Logo from ".";

describe("<Logo />", () => {
  it("should render red X by default", () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/rentx/i).parentElement).toHaveStyle({
      color: "#DC1637"
    });
  });

  it("should render white X when color is passed", () => {
    renderWithTheme(<Logo color="white" />);

    expect(screen.getByLabelText(/rentx/i).parentElement).toHaveStyle({
      color: "#FFFFFF"
    });
  });

  it("should render a normal logo when size is default", () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/rentx/i).parentElement).toHaveStyle({
      width: "20rem",
      height: "2.2rem"
    });
  });

  it("should render a bigger logo when size is passed", () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/rentx/i).parentElement).toHaveStyle({
      width: "30rem",
      height: "4.8rem"
    });
  });

  it("should render a bigger logo without text hideText", () => {
    renderWithTheme(<Logo hideText />);

    expect(screen.getByLabelText(/rentx/i).parentElement).toHaveStyle({
      width: "4.8rem",
      height: "3.5rem"
    });
  });
});
