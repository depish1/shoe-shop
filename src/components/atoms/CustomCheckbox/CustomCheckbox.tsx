import { ChangeEvent } from "react";
import { CustomCheckboxLabel, HiddenCheckbox } from "./CustomCheckbox.styled";

interface ICustomCheckboxProps {
  labelValue: string;
  value: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<ICustomCheckboxProps> = ({
  labelValue,
  handleChange,
  value,
}) => {
  return (
    <>
      <HiddenCheckbox
        type="checkbox"
        name={labelValue}
        id={labelValue}
        onChange={handleChange}
        checked={value}
      />
      <CustomCheckboxLabel htmlFor={labelValue}>
        {labelValue}
      </CustomCheckboxLabel>
    </>
  );
};

export default CustomCheckbox;
