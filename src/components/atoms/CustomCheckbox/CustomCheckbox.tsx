import { ChangeEvent } from "react";
import { CustomCheckboxLabel, HiddenCheckbox } from "./CustomCheckbox.styled";

interface ICustomCheckboxProps {
  labelValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<ICustomCheckboxProps> = ({
  labelValue,
  handleChange,
}) => {
  return (
    <>
      <HiddenCheckbox
        type="checkbox"
        name={labelValue}
        id={labelValue}
        onChange={handleChange}
      />
      <CustomCheckboxLabel htmlFor={labelValue}>
        {labelValue}
      </CustomCheckboxLabel>
    </>
  );
};

export default CustomCheckbox;
