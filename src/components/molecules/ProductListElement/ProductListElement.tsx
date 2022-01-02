import {
  StyledProductListElement,
  StyledProductListElementImg,
  StyledProductImgWrapper,
  StyledProductName,
  StyledProductPrice,
  StyledProductListElementDesc,
} from "./ProductListElement.styled";
import { IProduct } from "store/Products/Types";

interface IProductListElementProps {
  product: IProduct;
}

const ProductListElement: React.FC<IProductListElementProps> = ({
  product,
}) => {
  const formatPrice = (price: number) => {
    const priceAsString = `${price}`.replace(".", ",");
    const dotIndex = priceAsString.indexOf(".");
    switch (priceAsString.length - dotIndex + 1) {
      case 1:
        return `${priceAsString}0 zł`;
      case 2:
        return `${priceAsString}00 zł`;
      default:
        return `${priceAsString} zł`;
    }
  };
  formatPrice(product.price);
  return (
    <li>
      <StyledProductListElement>
        <StyledProductImgWrapper>
          <StyledProductListElementImg
            src={product.images[0]}
            alt="Zdjęcie produktu"
          />
        </StyledProductImgWrapper>
        <StyledProductListElementDesc>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPrice>{formatPrice(product.price)}</StyledProductPrice>
        </StyledProductListElementDesc>
      </StyledProductListElement>
    </li>
  );
};

export default ProductListElement;
