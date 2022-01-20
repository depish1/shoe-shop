import AddProductSuccessModalContent from "components/atoms/Modal/Modals/AddProductSuccessModalContent/AddProductSuccessModalContent";
import { ISize } from "components/molecules/CheckboxesSelect/sizesInitialData";
import { useState } from "react";
import { IBasketProduct, EBasketActionTypes } from "store/Basket/Types";
import { IProduct } from "store/Products/Types";
import { useModal } from "components/atoms/Modal/useModal";
import { useAppDispatch } from "store/hooks";

export const useProductDesc = (
  prodData: IProduct
): [
  (valueArr: ISize[]) => void,
  (e: React.MouseEvent) => void,
  string | null | undefined
] => {
  const [selectedSize, setSelectedSize] = useState<string | null>();
  const [errorMsg, setErrorMsg] = useState<string | null>();
  const { closeModal, openModal } = useModal();
  const dispatch = useAppDispatch();

  const productAddedToBasketText: string =
    "Produkt został pomyślnie dodany do koszyka. ";

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
    setErrorMsg(null);
    if (!selectedSize) return setErrorMsg("Wybierz rozmiar.");
    const formatedProduct: IBasketProduct = {
      id: prodData.id,
      brand: prodData.brand,
      name: prodData.name,
      price: prodData.price,
      image: prodData.images[0],
      size: selectedSize,
    };

    dispatch({
      type: EBasketActionTypes.ADD_PRODUCT,
      payload: formatedProduct,
    });
    openModal(undefined, [
      <AddProductSuccessModalContent
        text={productAddedToBasketText}
        closeHandler={closeModal}
      />,
    ]);
  };

  return [handleSizeSelect, clickHandler, errorMsg];
};

export default useProductDesc;
