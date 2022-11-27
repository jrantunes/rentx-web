import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from "react";

import * as S from "./styles";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  label?: string;
  labelFor?: string;
  initialValue?: string;
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInputChange,
  icon,
  label,
  error,
  labelFor = "",
  initialValue = "",
  iconPosition = "left",
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error} hasValue={!!value}>
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.InputContent iconPosition={iconPosition} hasIcon={!!icon}>
          <S.Input
            id={labelFor}
            value={value}
            disabled={disabled}
            hasValue={!!value}
            hasLabel={!!label}
            onChange={onChange}
            autoComplete="off"
            {...props}
          />
          {!!label && (
            <S.Label aria-hidden={!value} hasValue={!!value} htmlFor={labelFor}>
              {label}
            </S.Label>
          )}
        </S.InputContent>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
