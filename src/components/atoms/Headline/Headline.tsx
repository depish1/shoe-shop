import {
  StyledHeadline2,
  StyledHeadline3,
  StyledHeadline4,
} from "./Headline.styled";
interface IHeadlineProps {
  size: 2 | 3 | 4;
  noMargin?: boolean;
}

const Headline: React.FC<IHeadlineProps> = ({ size, children, noMargin }) => {
  let headlineToRender: JSX.Element;
  switch (size) {
    case 3:
      headlineToRender = (
        <StyledHeadline3 noMargin={noMargin}>{children}</StyledHeadline3>
      );
      break;
    case 4:
      headlineToRender = (
        <StyledHeadline4 noMargin={noMargin}>{children}</StyledHeadline4>
      );
      break;
    case 2:
    default:
      headlineToRender = (
        <StyledHeadline2 noMargin={noMargin}>{children}</StyledHeadline2>
      );
      break;
  }
  return headlineToRender;
};

export default Headline;
