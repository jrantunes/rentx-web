import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import TextField from ".";
import { AiOutlineMail } from "react-icons/ai";

describe("<TextField />", () => {
  it("should render with label", () => {
    renderWithTheme(
      <TextField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
  });

  it("should render without label", () => {
    renderWithTheme(<TextField placeholder="Placeholder" />);

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    renderWithTheme(
      <TextField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });

  it("should change its value when typing", async () => {
    const onInputChange = jest.fn();

    renderWithTheme(
      <TextField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        onInputChange={onInputChange}
      />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);
    const text = "Text example";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
      expect(input).toHaveValue(text);
    });

    expect(onInputChange).toHaveBeenCalledWith(text);
  });

  it("should not change its value when disabled", async () => {
    const onInputChange = jest.fn();

    renderWithTheme(
      <TextField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        onInputChange={onInputChange}
        disabled
      />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);
    expect(input).toBeDisabled();

    const text = "Text example";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInputChange).not.toHaveBeenCalled();
  });

  it("should render label with dynamic opacity based on input value", async () => {
    renderWithTheme(
      <TextField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);
    const label = screen.getByText(/label/i);

    expect(label).toHaveStyle({
      opacity: "0"
    });

    expect(label).toHaveAttribute("aria-hidden", "true");

    userEvent.type(input, "Some test");

    await waitFor(() => {
      expect(input).toHaveFocus();
      expect(label).toHaveStyle({
        opacity: "1"
      });
    });

    expect(label).toHaveAttribute("aria-hidden", "false");
  });

  it("should be accessible with tab", async () => {
    renderWithTheme(
      <TextField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    await waitFor(() => {
      expect(document.body).not.toHaveFocus();
      expect(input).toHaveFocus();
    });
  });

  it("should not to be accessible with tab when disabled", async () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        disabled
      />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    await waitFor(() => {
      expect(input).not.toHaveFocus();
    });
  });

  it("should render with error", () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        error="Error Message"
      />
    );

    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  it("should render with icon", () => {
    const { container } = renderWithTheme(
      <TextField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        error="Error Message"
        icon={<AiOutlineMail data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render icon on the left side by default", () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        error="Error Message"
        icon={<AiOutlineMail data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({
      order: 0
    });
  });

  it("should render icon on the right side", () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        error="Error Message"
        iconPosition="right"
        icon={<AiOutlineMail data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({
      order: 1
    });
  });
});
