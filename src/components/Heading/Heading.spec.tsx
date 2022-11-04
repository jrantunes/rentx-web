import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Heading from ".";

describe("<Heading />", () => {
  it("should render white heading by default", () => {
    renderWithTheme(<Heading>Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      color: "#FFFFFF"
    });
  });

  it("should render gray heading when color is passed", () => {
    renderWithTheme(<Heading color="gray700">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      color: "#47474D"
    });
  });

  it("should render heading with primary color", () => {
    renderWithTheme(<Heading color="primary">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      color: "#DC1637"
    });
  });

  it("should render with medium size by default", () => {
    renderWithTheme(<Heading>Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      "font-size": "3rem"
    });
  });

  it("should render with small size", () => {
    renderWithTheme(<Heading size="small">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      "font-size": "2.4rem"
    });
  });

  it("should render with large size", () => {
    renderWithTheme(<Heading size="large">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      "font-size": "5.4rem"
    });
  });

  it("should render with align left by default", () => {
    renderWithTheme(<Heading>Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      "text-align": "left"
    });
  });

  it("should render with align center", () => {
    renderWithTheme(<Heading align="center">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      "text-align": "center"
    });
  });

  it("should render with align right", () => {
    renderWithTheme(<Heading align="right">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /heading/i })).toHaveStyle({
      "text-align": "right"
    });
  });
});
