import Headline from "components/atoms/Headline/Headline";
import Button from "components/atoms/Button/Button";
import CheckboxesSelect from "components/molecules/CheckboxesSelect/CheckboxesSelect";
import { ReactComponent as SuccessIcon } from "assets/icons/SuccessIcon.svg";
import { ErrorMsg } from "components/atoms/ErrorMsg/ErrorMsg.styled";
import { IProduct } from "store/Products/Types";
import { formatPrice } from "utils/helpers";
import { useProductDesc } from "./useProductDesc";
import {
  StyledProductDescWrapper,
  StyledPrice,
  StyledLabel,
  DataWrapper,
  StyledBrand,
  AccessText,
} from "./ProductDesc.styled";

interface IProductDescProps {
  prodData: IProduct;
}

const ProductDesc: React.FC<IProductDescProps> = ({ prodData }) => {
  const [handleSizeSelect, clickHandler, errorMsg] = useProductDesc(prodData);

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
