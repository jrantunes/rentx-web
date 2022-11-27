// import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { FormWrapper, FormDescription } from ".";

describe("<Form />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          tempore, veniam ipsum animi error dolorum debitis esse exercitationem
          voluptates rem architecto, molestiae, quo asperiores aspernatur
          perspiciatis corporis quos blanditiis saepe.
        </FormDescription>
      </FormWrapper>
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        color: #7A7A80;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        margin-bottom: 3.2rem;
        max-width: 24rem;
      }

      <body>
        <div>
          <div
            class=""
          >
            <p
              class="c0"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore, veniam ipsum animi error dolorum debitis esse exercitationem voluptates rem architecto, molestiae, quo asperiores aspernatur perspiciatis corporis quos blanditiis saepe.
            </p>
          </div>
        </div>
      </body>
    `);
  });
});
