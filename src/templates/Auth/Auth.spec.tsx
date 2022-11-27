import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Auth from ".";

describe("<Auth />", () => {
  it("should render correctly", () => {
    renderWithTheme(
      <Auth title="Title">
        <h1>Children</h1>
      </Auth>
    );

    expect(screen.getByRole("heading", { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /children/i })
    ).toBeInTheDocument();
  });
});
