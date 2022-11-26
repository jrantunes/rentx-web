import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import HeaderUser from ".";

describe("<HeaderUser />", () => {
  it("should render with authenticated user name", () => {
    renderWithTheme(<HeaderUser userName="User" />);

    expect(screen.getByRole("heading", { name: /user/i })).toBeInTheDocument();
  });

  it("should render a non authenticated version", () => {
    renderWithTheme(<HeaderUser />);

    expect(
      screen.getByRole("heading", { name: /faça login/i })
    ).toBeInTheDocument();
  });

  it("should render with image", () => {
    renderWithTheme(<HeaderUser userImageUrl="/image/test" />);

    expect(
      screen.getByRole("img", { name: /imagem de perfil do usuário/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: /imagem de perfil do usuário/i })
    ).toHaveAttribute("src", "/image/test");
  });
});
