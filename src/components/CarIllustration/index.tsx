import * as S from "./styles";

export type CarIllustrationProps = {
  backgroundElementColor?: "primary" | "gray700";
  backgroundElementOpacity?: "50%" | "100%";
  absoluteImageURL: string;
  absoluteImageAltText: string;
  id?: string;
};

const CarIllustration = ({
  absoluteImageURL,
  absoluteImageAltText,
  id = "illustration",
  backgroundElementColor = "primary",
  backgroundElementOpacity = "100%"
}: CarIllustrationProps) => {
  return (
    <S.Wrapper backgroundElementColor={backgroundElementColor}>
      <S.AbsoluteImage src={absoluteImageURL} alt={absoluteImageAltText} />
      <svg
        aria-label="Background Illustration"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 477 613"
      >
        <path
          stroke={`url(#${id}-A)`}
          strokeWidth="16"
          d="M8 54.822h414.178v549.767H8z"
        />
        <path
          transform="rotate(-180 469 556.791)"
          stroke={`url(#${id}-B)`}
          strokeWidth="16"
          d="M469 556.791h414.178v548.791H469z"
        />
        <defs>
          <linearGradient
            id={`${id}-A`}
            x1="0"
            y1="46.455"
            x2="475.559"
            y2="571.246"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              aria-label="Gradient A Top Stop Element"
              stopColor="currentColor"
              stopOpacity={backgroundElementOpacity}
            />
            <stop offset="1" stopColor="currentColor" stopOpacity=".1" />
          </linearGradient>
          <linearGradient
            id={`${id}-B`}
            x1="477"
            y1="564.425"
            x2="951.657"
            y2="1089.13"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              aria-label="Gradient B Top Stop Element"
              stopColor="currentColor"
              stopOpacity={backgroundElementOpacity}
            />
            <stop offset="1" stopColor="currentColor" stopOpacity=".1" />
          </linearGradient>
        </defs>
      </svg>
    </S.Wrapper>
  );
};

export default CarIllustration;
