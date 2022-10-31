import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { AiOutlineCar } from "react-icons/ai";
import Button from ".";

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    renderWithTheme(<Button>RentX</Button>);

    expect(screen.getByRole("button", { name: /rentx/i })).toHaveStyle({
      height: "7rem",
      padding: "0.8rem 4.8rem",
      "font-size": "1.6rem"
    });
  });

  it("should render the small size", () => {
    renderWithTheme(<Button size="small">RentX</Button>);

    expect(screen.getByRole("button", { name: /rentx/i })).toHaveStyle({
      height: "6rem",
      padding: "0.8rem 4rem",
      "font-size": "1.6rem"
    });
  });

  it("should render the large size", () => {
    renderWithTheme(<Button size="large">RentX</Button>);

    expect(screen.getByRole("button", { name: /rentx/i })).toHaveStyle({
      height: "8rem",
      padding: "0.8rem 8rem",
      "font-size": "1.8rem"
    });
  });

  it("should render a fullWidth version", () => {
    renderWithTheme(<Button fullWidth>RentX</Button>);

    expect(screen.getByRole("button", { name: /rentx/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should render with red background by default", () => {
    renderWithTheme(<Button>RentX</Button>);

    expect(screen.getByRole("button", { name: /rentx/i })).toHaveStyle({
      "background-color": "#DC1637",
      color: "#FFFFFF"
    });
  });

  it("should render with black background", () => {
    renderWithTheme(<Button color="black">RentX</Button>);

    expect(screen.getByRole("button", { name: /rentx/i })).toHaveStyle({
      "background-color": "#29292E",
      color: "#FFFFFF"
    });
  });

  it("should render with green background", () => {
    renderWithTheme(<Button color="green">RentX</Button>);

    expect(screen.getByRole("button", { name: /rentx/i })).toHaveStyle({
      "background-color": "#03B252",
      color: "#FFFFFF"
    });
  });

  it("should render an icon version", () => {
    renderWithTheme(
      <Button icon={<AiOutlineCar data-testid="icon" />}>RentX</Button>
    );

    expect(screen.getByText(/rentx/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render button as link", () => {
    renderWithTheme(
      <Button as="a" href="/link">
        RentX
      </Button>
    );

    expect(screen.getByRole("link", { name: /rentx/i })).toHaveAttribute(
      "href",
      "/link"
    );
  });
});
