import Button from "components/atoms/Button/Button";
import { TextParagraph } from "components/atoms/Wrappers/Wrappers.styled";

interface IAddProductSuccessModalContentProps {
  text: string;
  closeHandler: () => void;
}

const AddProductSuccessModalContent: React.FC<
  IAddProductSuccessModalContentProps
> = ({ text, closeHandler }) => (
  <>
    <TextParagraph>{text}</TextParagraph>
    <Button
      text="Przejdź do płatności"
      type="button"
      clickHandler={() => console.log("płatność")}
    />
    <Button
      additionalTopMargin
      isSecondary
      text="Zamknij"
      type="button"
      clickHandler={closeHandler}
    />
  </>
);

export default AddProductSuccessModalContent;
