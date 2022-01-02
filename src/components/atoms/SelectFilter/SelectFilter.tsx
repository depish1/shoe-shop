import {
  StyledSelectFilter,
  StyledSelectWrapper,
  StyledLabel,
} from "./SelectFilter.styled";

interface IOption {
  value: any;
  text: string;
}

interface ISelectFilterProps {
  name: string;
  label: string;
  options: IOption[];
}

const SelectFilter: React.FC<ISelectFilterProps> = ({
  name,
  label,
  options,
}) => {
  return (
    <StyledSelectWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelectFilter name={name}>
        <option value={""}>Wybierz opcję</option>
        {options.map(({ value, text }) => (
          <option key={value}>{text}</option>
        ))}
      </StyledSelectFilter>
    </StyledSelectWrapper>
  );
};

export default SelectFilter;
