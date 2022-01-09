import { MouseEvent } from "react";
import { StyledImageButton, Image } from "./ImageButton.styled";

interface IImageButtonProps {
  index: number;
  selectedImage: number;
  imageSrc: string;
  clickHandler: (event: MouseEvent<HTMLElement>) => void;
}

const ImageButton: React.FC<IImageButtonProps> = ({
  index,
  selectedImage,
  imageSrc,
  clickHandler,
}) => {
  return (
    <StyledImageButton
      isSelected={index === selectedImage}
      data-index={index}
      onClick={clickHandler}
    >
      <Image src={imageSrc} />
    </StyledImageButton>
  );
};

export default ImageButton;
