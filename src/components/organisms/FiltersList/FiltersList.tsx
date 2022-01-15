import Headline from "components/atoms/Headline/Headline";
import Button from "components/atoms/Button/Button";
import SelectFilter from "components/atoms/SelectFilter/SelectFilter";
import Filter from "components/molecules/Filter/Filter";
import CheckboxesSelect from "components/molecules/CheckboxesSelect/CheckboxesSelect";
import InputField from "components/atoms/InputField/InputField";
import {
  StyledFiltersList,
  StyledInputsWrapper,
  StyledPaddingWrapper,
} from "./FiltersList.styled";
import { genderOptions, brandOptions, EFilterMehods } from "./helpers";
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
      <Filter labelText="Płeć">
        <StyledPaddingWrapper>
          <SelectFilter
            name="gender"
            label="Wybierz płeć"
            options={genderOptions}
            handleChange={handleSelectChange}
          />
        </StyledPaddingWrapper>
      </Filter>
      <Filter labelText="Marka">
        <StyledPaddingWrapper>
          <SelectFilter
            name="brand"
            label="Wybierz markę"
            options={brandOptions}
            handleChange={handleSelectChange}
          />
        </StyledPaddingWrapper>
      </Filter>
      <Filter labelText="Cena">
        <StyledPaddingWrapper>
          <StyledInputsWrapper>
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
          </StyledInputsWrapper>
        </StyledPaddingWrapper>
      </Filter>
      <Filter labelText="Rozmiar">
        <StyledPaddingWrapper>
          <CheckboxesSelect
            handleCheckboxesChange={handleCheckboxesChange}
            multiSelect={true}
          />
        </StyledPaddingWrapper>
      </Filter>
      <Button text="Filtruj" type="button" clickHandler={handleSetNewFilters} />
    </StyledFiltersList>
  );
};

export default FiltersList;
