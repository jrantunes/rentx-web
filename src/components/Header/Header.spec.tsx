import { screen } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { renderWithTheme } from "utils/tests/helpers";

import Header from ".";

jest.mock("react-router-dom", () => {
  return {
    useLocation: jest.fn()
  };
});

describe("<Header />", () => {
  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/login"
    });
  });

  it("should render correctly", () => {
    renderWithTheme(<Header />);

    expect(
      screen.getByRole("heading", { name: /perfil/i })
    ).toBeInTheDocument();
  });
});
