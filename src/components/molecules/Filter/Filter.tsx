import { useState } from "react";
import {
  StyledBigLabel,
  StyledChildWrapper,
  StyledFilter,
} from "./Filter.styled";
import { ReactComponent as ExpandIcon } from "assets/icons/ExpandIcon.svg";

interface IFilterProps {
  labelText: string;
}

const Filter: React.FC<IFilterProps> = ({ children, labelText }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledFilter isOpen={isOpen}>
      <StyledBigLabel isOpen={isOpen} onClick={toggleOpen}>
        {labelText}
        <ExpandIcon />
      </StyledBigLabel>
      <StyledChildWrapper isOpen={isOpen}>{children}</StyledChildWrapper>
    </StyledFilter>
  );
};

export default Filter;
