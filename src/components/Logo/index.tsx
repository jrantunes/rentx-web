import * as S from "./styles";

export type LogoProps = {
  hideText?: boolean;
  color?: "primary" | "white";
  size?: "normal" | "large";
};

const Logo = ({
  color = "primary",
  hideText = false,
  size = "normal"
}: LogoProps) => {
  return (
    <S.Wrapper color={color} size={size} hideText={hideText}>
      <svg
        role="img"
        aria-label="RentX"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 22"
      >
        <g clipPath="url(#a)">
          <path
            className="text"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M77.147.436h-34.35v4.22h34.35V.435Zm0 8.663h-34.35v4.22h34.35v-4.22Zm-34.35 8.664h34.35v4.22h-34.35v-4.22ZM124.594.436h34.35v4.22h-34.35V.435Zm19.071 21.546V7.704l-.188.092-3.417 1.69v12.496h3.605Z M3.605 22H0v-3.797C.002 13.495 1.6 8.98 4.443 5.65 7.287 2.32 11.143.446 15.165.44h20.99v4.22h-20.99c-3.064.004-6.001 1.43-8.168 3.966-2.167 2.535-3.387 5.973-3.392 9.56V22Z M85.325.433h-3.527v1.01l-.001.004V2.53c-.001.751-.002 1.5 0 1.869V22h3.605V5.4l3.1 1.599 27.67 14.976v.007h.013l.032.018h3.562v-3.397l-.002-.001v-7.5l-.006.002V.44h-3.606v16.316l-2.291-1.163L85.325.433Z"
            fill="#E1E1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m165.959.612 12.68 6.256-4.605 2.275-8.436-4.162V.436l.361.176Zm33.988 16.772v4.546l-13.007-6.416 4.601-2.274 8.406 4.144Zm0-12.399V.44l-.357.172-16.8 8.302h-.004l-4.602 2.28-12.586 6.217v4.55l17.192-8.497 4.601-2.275 12.556-6.204Z"
            className="logo-x"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h200v22H0z" />
          </clipPath>
        </defs>
      </svg>
    </S.Wrapper>
  );
};

export default Logo;
