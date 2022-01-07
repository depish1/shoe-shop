import Headline from "components/atoms/Headline/Headline";
import Button from "components/atoms/Button/Button";
import SelectFilter from "components/atoms/SelectFilter/SelectFilter";
import MinMaxInput from "components/molecules/MinMaxInput/MinMaxInput";
import CheckboxesMultiSelect from "components/molecules/CheckboxesMultiSelect/CheckboxesMultiSelect";
import InputField from "components/atoms/InputField/InputField";
import { StyledFiltersList } from "./FiltersList.styled";
import {
  genderOptions,
  brandOptions,
  EFilterMehods,
  sizesArray,
} from "./helpers";
import { useFilters } from "./useFilters";

const FiltersList: React.FC = () => {
  const {
    handleSetNewFilters,
    handleInputChange,
    handleSelectChange,
    handleCheckboxesChange,
  } = useFilters();
  return (
    <StyledFiltersList>
      <Headline size={2}>Filtry</Headline>
      <SelectFilter
        name="gender"
        label="Wybierz płeć"
        options={genderOptions}
        handleChange={handleSelectChange}
      />
      <SelectFilter
        name="brand"
        label="Wybierz markę"
        options={brandOptions}
        handleChange={handleSelectChange}
      />
      <MinMaxInput bigLabel="Cena:">
        <InputField
          label="Min"
          type="number"
          name="minPrice"
          changeHandler={handleInputChange}
          filterMethod={EFilterMehods.GREATER_EQUAL}
          noMargin={true}
        />
        <InputField
          label="Max"
          type="number"
          name="maxPrice"
          changeHandler={handleInputChange}
          filterMethod={EFilterMehods.LESS_EQUAL}
          noMargin={true}
        />
      </MinMaxInput>
      <CheckboxesMultiSelect
        bigLabel="Rozmiar"
        sizesArray={sizesArray}
        handleCheckboxesChange={handleCheckboxesChange}
      />
      <Button text="Filtruj" type="button" clickHandler={handleSetNewFilters} />
    </StyledFiltersList>
  );
};

export default FiltersList;
