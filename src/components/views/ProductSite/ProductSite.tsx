import Slider from "components/organisms/Slider/Slider";
import ProductData from "components/organisms/ProductData/ProductData";
import { IProduct } from "store/Products/Types";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";
import { SectionBackgroundContainer } from "components/atoms/Wrappers/Wrappers.styled";
import { StyledProductSiteContainer } from "./ProductSite.styled";
import { useEffect, useState } from "react";
import { FirebaseMethods } from "utils/firebase/FirebaseHelper";

const downloadAndSetProductData = async (
  id: string,
  setState: React.Dispatch<React.SetStateAction<IProduct | undefined>>
) => {
  const productData = (await FirebaseMethods.getDocumentById(
    id,
    "products"
  )) as IProduct;
  setState(productData);
};

const ProductSite: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const productData = useAppSelector(
    (state) => state.productReducer.products
  ).find((product) => product.id === id);

  useEffect(() => {
    if (productData === undefined) {
      if (id === undefined) return;
      downloadAndSetProductData(id, setProduct);
    } else {
      setProduct(productData);
    }
  }, [productData, id]);

  return (
    <SectionBackgroundContainer>
      <StyledProductSiteContainer>
        {product !== undefined && <Slider images={product.images} />}
        {product !== undefined && <ProductData prodData={product} />}
      </StyledProductSiteContainer>
    </SectionBackgroundContainer>
  );
};

export default ProductSite;
