import {
  StyledSelectFilter,
  StyledSelectWrapper,
  StyledLabel,
} from "./SelectFilter.styled";
import { ChangeEvent } from "react";

interface IOption {
  value: any;
  text: string;
}

interface ISelectFilterProps {
  name: string;
  label: string;
  options: IOption[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFilter: React.FC<ISelectFilterProps> = ({
  name,
  label,

  options,
  handleChange,
}) => {
  return (
    <StyledSelectWrapper>
      <StyledSelectFilter name={name} onChange={handleChange}>
        <option value={""}>Wybierz opcję</option>
        {options.map(({ value, text }) => {
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </StyledSelectFilter>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
    </StyledSelectWrapper>
  );
};

export default SelectFilter;
