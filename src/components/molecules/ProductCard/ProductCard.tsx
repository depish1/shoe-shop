import {
  StyledProductCard,
  StyledProductCardImg,
  StyledProductImgWrapper,
  StyledProductName,
  StyledProductPrice,
  StyledProductCardDesc,
} from "./ProductCard.styled";
import { IProduct } from "store/Products/Types";

interface IProductListElementProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductListElementProps> = ({ product }) => {
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
      <StyledProductCard to={`/products/${product.id}`}>
        <StyledProductImgWrapper>
          <StyledProductCardImg
            src={product.images[0]}
            alt="Zdjęcie produktu"
          />
        </StyledProductImgWrapper>
        <StyledProductCardDesc>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPrice>{formatPrice(product.price)}</StyledProductPrice>
        </StyledProductCardDesc>
      </StyledProductCard>
    </li>
  );
};

export default ProductCard;
