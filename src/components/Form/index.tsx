import styled, { css } from "styled-components";

import * as TextFieldStyles from "components/TextField/styles";
import * as ButtonStyles from "components/Button/styles";

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} auto 0;
    }
  `}
`;

export const FormDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    line-height: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.medium};
    max-width: 24rem;
  `}
`;
