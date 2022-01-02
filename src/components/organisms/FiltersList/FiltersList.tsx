import Headline from "components/atoms/Headline/Headline";
import Button from "components/atoms/Button/Button";
import SelectFilter from "components/atoms/SelectFilter/SelectFilter";
import { useState } from "react";
import { StyledFiltersList } from "./FiltersList.styled";

const genderOptions = [
  {
    value: "man",
    text: "Mężczyzna",
  },
  {
    value: "woman",
    text: "Kobieta",
  },
];

const FiltersList: React.FC = () => {
  const [newFilters, setNewFilters] = useState<any>();
  return (
    <StyledFiltersList>
      <Headline size={2}>Filtry</Headline>
      <SelectFilter
        name=" gender"
        label="Wybierz płeć"
        options={genderOptions}
      />
    </StyledFiltersList>
  );
};

export default FiltersList;
