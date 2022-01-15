import Headline from "components/atoms/Headline/Headline";
import Button from "components/atoms/Button/Button";
import CheckboxesSelect from "components/molecules/CheckboxesSelect/CheckboxesSelect";
import { ISize } from "components/molecules/CheckboxesSelect/sizesInitialData";
import { EFilterMehods } from "components/organisms/FiltersList/helpers";
import { useState } from "react";
import { IProduct } from "store/Products/Types";
import { formatPrice } from "utils/helpers";
import {
  StyledProductDescWrapper,
  StyledPrice,
  StyledLabel,
  DataWrapper,
} from "./ProductDesc.styled";
import { ErrorMsg } from "components/atoms/ErrorMsg/ErrorMsg.styled";

interface IProductDescProps {
  prodData: IProduct;
}

const ProductDesc: React.FC<IProductDescProps> = ({ prodData }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>();
  const [errorMsg, setErrorMsg] = useState<string | null>();

  const handleSizeSelect = (
    valueArr: ISize[],
    filterMethod: EFilterMehods,
    filterName: string
  ) => {
    setErrorMsg(null);
    const sizesArr = valueArr
      .filter((size) => size.value === true)
      .map((size) => size.size);
    if (sizesArr.length) {
      setSelectedSize(sizesArr[0]);
    } else {
      setSelectedSize(null);
    }
  };

  const clickHandler = (e: React.MouseEvent) => {
    if (!selectedSize) return setErrorMsg("Wybierz rozmiar.");
    console.log(selectedSize);
  };
  return (
    <StyledProductDescWrapper>
      <Headline size={3} noMargin>
        {prodData.name}
      </Headline>
      <DataWrapper>
        <StyledLabel>Cena:</StyledLabel>
        <StyledPrice>{formatPrice(prodData.price)}</StyledPrice>
      </DataWrapper>
      <DataWrapper>
        <StyledLabel>Rozmiar:</StyledLabel>
        <CheckboxesSelect
          handleCheckboxesChange={handleSizeSelect}
          multiSelect={false}
        />
      </DataWrapper>
      <DataWrapper>
        <Button
          clickHandler={clickHandler}
          type="button"
          text="Dodaj do koszyka"
        />
        {errorMsg && <ErrorMsg smallSpacing>{errorMsg}</ErrorMsg>}
      </DataWrapper>
    </StyledProductDescWrapper>
  );
};

export default ProductDesc;
