import Button from "components/atoms/Button/Button";
import { TextParagraph } from "components/atoms/Wrappers/Wrappers.styled";

interface IRegistrationSuccessModalContentProps {
  text: string;
  closeHandler: () => void;
}

const RegistrationSuccessModalContent: React.FC<
  IRegistrationSuccessModalContentProps
> = ({ text, closeHandler }) => (
  <>
    <TextParagraph>{text}</TextParagraph>
    <Button text="Zamknij" type="button" clickHandler={closeHandler} />
  </>
);

export default RegistrationSuccessModalContent;
