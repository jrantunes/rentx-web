import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import FormSignUp from ".";

describe("<FormSignUp />", () => {
  it("should render the form", () => {
    const { container } = renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/cnh/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirmar senha")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the form description", () => {
    renderWithTheme(<FormSignUp />);

    expect(
      screen.getByText(/Faça seu cadastro de forma rápida e fácil/i)
    ).toBeInTheDocument();
  });
});
