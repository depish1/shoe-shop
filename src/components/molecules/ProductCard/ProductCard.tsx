import { formatPrice } from "utils/helpers";
import { IProduct } from "store/Products/Types";
import {
  StyledProductCard,
  StyledProductCardImg,
  StyledProductImgWrapper,
  StyledProductName,
  StyledProductPrice,
  StyledProductCardDesc,
} from "./ProductCard.styled";

interface IProductListElementProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductListElementProps> = ({ product }) => {
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
