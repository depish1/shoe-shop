import { StyledLoader, StyledSquare } from "./Loader.styled";
import { StyledModalBackground } from "components/atoms/Wrappers/Wrappers.styled";
import { useEffect } from "react";

interface ILoaderProps {
  render: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ render }) => {
  useEffect(() => {
    if (render) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [render]);
  return render ? (
    <StyledModalBackground>
      <StyledLoader>
        <StyledSquare />
        <StyledSquare />
        <StyledSquare />
        <StyledSquare />
      </StyledLoader>
    </StyledModalBackground>
  ) : null;
};

export default Loader;
