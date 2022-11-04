import styled, { css } from "styled-components";
import { CarIllustrationProps } from ".";

type WrapperProps = Pick<CarIllustrationProps, "backgroundElementColor">;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, backgroundElementColor }) => css`
    color: ${theme.colors[backgroundElementColor!]};
    position: relative;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 100%;
      width: 75%;
    }
  `}
`;

export const AbsoluteImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
`;
