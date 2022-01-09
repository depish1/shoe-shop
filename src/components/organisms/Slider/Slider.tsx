import ImageButton from "components/atoms/ImageButton/ImageButton";
import { MouseEvent, useState } from "react";
import {
  StyledSlider,
  Slide,
  Slides,
  Image,
  ButtonsWrapper,
} from "./Slider.styled";

interface ISliderProps {
  images: string[];
}

const Slider: React.FC<ISliderProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleSelectImage = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLButtonElement;
    const index = el.getAttribute("data-index");
    if (index === null) return;
    setSelectedImage(parseInt(index));
  };

  return (
    <StyledSlider>
      <Slides slidesTransition={`${(100 / images.length) * selectedImage}%`}>
        {images.map((imageSrc) => (
          <Slide key={imageSrc}>
            <Image src={imageSrc} />
          </Slide>
        ))}
      </Slides>
      <ButtonsWrapper>
        {images.map((imageSrc, index) => (
          <ImageButton
            key={imageSrc}
            imageSrc={imageSrc}
            index={index}
            selectedImage={selectedImage}
            clickHandler={handleSelectImage}
          />
        ))}
      </ButtonsWrapper>
    </StyledSlider>
  );
};

export default Slider;
