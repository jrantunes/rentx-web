import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import FormSignIn from ".";

describe("<FormSignIn />", () => {
  it("should render the form", () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /criar conta gratuita/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the forgot password link", () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole("link", { name: /esqueci minha senha/i })
    ).toBeInTheDocument();
  });
});
