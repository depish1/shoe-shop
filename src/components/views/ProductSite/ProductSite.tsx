import Slider from "components/organisms/Slider/Slider";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";
import {
  SectionBackgroundContainer,
  Styled2ColumnWrapper,
} from "components/atoms/Wrappers/Wrappers.styled";

const ProductSite: React.FC = () => {
  const { id } = useParams();
  const product = useAppSelector((state) => state.productReducer.products).find(
    (product) => product.id === id
  );
  return (
    <SectionBackgroundContainer>
      <Styled2ColumnWrapper>
        {product !== undefined && <Slider images={product.images} />}
        {id}
      </Styled2ColumnWrapper>
    </SectionBackgroundContainer>
  );
};

export default ProductSite;
