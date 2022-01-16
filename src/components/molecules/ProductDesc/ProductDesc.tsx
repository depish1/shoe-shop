import Headline from "components/atoms/Headline/Headline";
import Button from "components/atoms/Button/Button";
import CheckboxesSelect from "components/molecules/CheckboxesSelect/CheckboxesSelect";
import { ReactComponent as SuccessIcon } from "assets/icons/SuccessIcon.svg";
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
  StyledBrand,
  AccessText,
} from "./ProductDesc.styled";
import { ErrorMsg } from "components/atoms/ErrorMsg/ErrorMsg.styled";

interface IProductDescProps {
  prodData: IProduct;
}

const ProductDesc: React.FC<IProductDescProps> = ({ prodData }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>();
  const [errorMsg, setErrorMsg] = useState<string | null>();

  const handleSizeSelect = (valueArr: ISize[]) => {
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
      <DataWrapper>
        <StyledBrand>{prodData.brand}</StyledBrand>
        <Headline size={3} noMargin>
          {prodData.name}
        </Headline>
        <AccessText>
          <SuccessIcon />
          Produkt dostępny w magazynie
        </AccessText>
      </DataWrapper>
      <DataWrapper>
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
