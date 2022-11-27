import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import * as S from "./styles";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  label?: string;
  labelFor?: string;
  initialValue?: string;
  formValue?: string;
  disabled?: boolean;
  error?: string;
  register?: UseFormRegister<FieldValues>;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInputChange,
  icon,
  label,
  error,
  register,
  formValue = "",
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
    <S.Wrapper
      disabled={disabled}
      error={!!error}
      hasValue={!!value || !!formValue}
    >
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.InputContent iconPosition={iconPosition} hasIcon={!!icon}>
          <S.Input
            id={labelFor}
            disabled={disabled}
            hasValue={!!value || !!formValue}
            hasLabel={!!label}
            onChange={register ? undefined : onChange}
            value={register ? undefined : value}
            {...(!!register && register(props.name || "name"))}
            {...props}
          />
          {!!label && (
            <S.Label
              aria-hidden={!value}
              hasValue={!!value || !!formValue}
              htmlFor={labelFor}
            >
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
