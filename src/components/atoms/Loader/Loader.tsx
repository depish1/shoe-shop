import {
  StyledLoaderBackground,
  StyledLoader,
  StyledSquare,
} from "./Loader.styled";

interface ILoaderProps {
  render: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ render }) => {
  return render ? (
    <StyledLoaderBackground>
      <StyledLoader>
        <StyledSquare />
        <StyledSquare />
        <StyledSquare />
        <StyledSquare />
      </StyledLoader>
    </StyledLoaderBackground>
  ) : null;
};

export default Loader;
