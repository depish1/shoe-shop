import { UseFormRegisterReturn } from "react-hook-form";
import { ChangeEvent } from "react";
import {
  FieldWrapper,
  StyledInput,
  StyledLabel,
  StyledErrorMsg,
} from "./InputField.styled";
import { EFilterMehods } from "components/organisms/FiltersList/helpers";

interface IInputFieldProps {
  label: string;
  type: "text" | "password" | "email" | "password" | "number";
  name?: string;
  formProps?: UseFormRegisterReturn;
  error?: string;
  noMargin?: boolean;
  filterMethod?: EFilterMehods;
  changeHandler?: (
    event: ChangeEvent<HTMLInputElement>,
    ...rest: any[]
  ) => void;
}

const InputField: React.FC<IInputFieldProps> = ({
  label,
  type,
  error,
  formProps,
  changeHandler,
  name,
  filterMethod,
  noMargin,
}) => {
  return (
    <FieldWrapper noMargin={noMargin}>
      <StyledInput
        type={type}
        isInvalid={!!error}
        {...formProps}
        onChange={changeHandler && ((e) => changeHandler(e, filterMethod))}
        name={name && name}
      />
      <StyledLabel isInvalid={!!error}>{label}</StyledLabel>
      {error && <StyledErrorMsg>{error}</StyledErrorMsg>}
    </FieldWrapper>
  );
};

export default InputField;
