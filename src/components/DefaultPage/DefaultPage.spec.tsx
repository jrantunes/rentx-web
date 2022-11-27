// import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import DefaultPage from ".";

describe("<DefaultPage />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<DefaultPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
