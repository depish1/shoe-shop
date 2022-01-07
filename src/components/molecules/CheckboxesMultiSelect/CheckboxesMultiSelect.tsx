import CustomCheckbox from "components/atoms/CustomCheckbox/CustomCheckbox";
import { EFilterMehods } from "components/organisms/FiltersList/helpers";
import { ChangeEvent, useEffect, useState } from "react";
import { CheckboxesWrapper } from "./CheckboxesMultiSelect.styled";

interface ICheckboxesMultiSelectProps {
  sizesArray: string[];
  handleCheckboxesChange: (
    filterMethod: EFilterMehods,
    valueArr: string[],
    filterName: string
  ) => void;
}

const modifyState = (
  prevState: string[],
  checkboxValue: boolean,
  stateValue: string
) => {
  let newState = [...prevState];
  if (checkboxValue) {
    newState.push(stateValue);
    return newState;
  } else {
    newState = newState.filter((value) => {
      return value !== stateValue;
    });
    return newState;
  }
};

const CheckboxesMultiSelect: React.FC<ICheckboxesMultiSelectProps> = ({
  sizesArray,
  handleCheckboxesChange,
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  useEffect(() => {
    handleCheckboxesChange(
      EFilterMehods.ARRAY_CONTAINS_ANY,
      selectedCheckboxes,
      "sizes"
    );
  }, [selectedCheckboxes]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    let { name, checked } = event.target;
    setSelectedCheckboxes((prevState) => modifyState(prevState, checked, name));
  };

  return (
    <CheckboxesWrapper>
      {sizesArray.map((size) => (
        <CustomCheckbox
          key={size}
          labelValue={size}
          handleChange={handleChange}
        />
      ))}
    </CheckboxesWrapper>
  );
};

export default CheckboxesMultiSelect;
