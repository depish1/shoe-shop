import CustomCheckbox from "components/atoms/CustomCheckbox/CustomCheckbox";
import { ChangeEvent, useEffect, useState } from "react";
import { EFilterMehods } from "components/organisms/FiltersList/helpers";
import { CheckboxesWrapper } from "./CheckboxesSelect.styled";
import { initialSizesArray, ISize } from "./sizesInitialData";

interface ICheckboxesSelectProps {
  multiSelect?: boolean;
  handleCheckboxesChange: (
    valueArr: ISize[],
    filterMethod: EFilterMehods,
    filterName: string
  ) => void;
}

const updateOneElement = (prevState: ISize[], name: string, value: boolean) => {
  const updatingIndex = prevState.findIndex((size) => size.size === name);
  const newState = [...prevState];
  newState[updatingIndex] = {
    size: newState[updatingIndex].size,
    value: value,
  };
  return newState;
};

const modifyState = (
  prevState: ISize[],
  checkboxValue: boolean,
  name: string,
  multiSelect: boolean
) => {
  if (multiSelect) {
    return updateOneElement(prevState, name, checkboxValue);
  }

  return updateOneElement(initialSizesArray, name, checkboxValue);
};

const CheckboxesSelect: React.FC<ICheckboxesSelectProps> = ({
  handleCheckboxesChange,
  multiSelect = false,
}) => {
  const [checkboxesData, setCheckboxesData] =
    useState<ISize[]>(initialSizesArray);

  useEffect(() => {
    handleCheckboxesChange(
      checkboxesData,
      EFilterMehods.ARRAY_CONTAINS_ANY,
      "sizes"
    );
  }, [checkboxesData]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    let { name, checked } = event.target;
    setCheckboxesData((prevState) =>
      modifyState(prevState, checked, name, multiSelect)
    );
  };

  return (
    <CheckboxesWrapper>
      {checkboxesData.map(({ size, value }) => (
        <CustomCheckbox
          key={size}
          value={value}
          labelValue={size}
          handleChange={handleChange}
        />
      ))}
    </CheckboxesWrapper>
  );
};

export default CheckboxesSelect;
