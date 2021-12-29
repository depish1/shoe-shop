import {
  StyledHeadline2,
  StyledHeadline3,
  StyledHeadline4,
} from "./Headline.styled";
interface IHeadlineProps {
  size: 2 | 3 | 4;
}

const Headline: React.FC<IHeadlineProps> = ({ size, children }) => {
  let headlineToRender: JSX.Element;
  switch (size) {
    case 3:
      headlineToRender = <StyledHeadline3>{children}</StyledHeadline3>;
      break;
    case 4:
      headlineToRender = <StyledHeadline4>{children}</StyledHeadline4>;
      break;
    case 2:
    default:
      headlineToRender = <StyledHeadline2>{children}</StyledHeadline2>;
      break;
  }
  return headlineToRender;
};

export default Headline;
