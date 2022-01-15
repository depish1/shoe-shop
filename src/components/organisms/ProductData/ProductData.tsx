import ProductDesc from "components/molecules/ProductDesc/ProductDesc";
import BenefitsBlock from "components/molecules/BenefitsBlock/BenefitsBlock";
import { IProduct } from "store/Products/Types";

import { StyledProductDataContainer } from "components/organisms/ProductData/ProductData.styled";

interface IProductDataProps {
  prodData: IProduct;
}

const ProductData: React.FC<IProductDataProps> = ({ prodData }) => {
  return (
    <StyledProductDataContainer>
      <ProductDesc prodData={prodData} />
      <BenefitsBlock />
    </StyledProductDataContainer>
  );
};

export default ProductData;
