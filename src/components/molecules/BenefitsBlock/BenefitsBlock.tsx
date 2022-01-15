import {
  StyledBenefitsContainer,
  Benefit,
  BenefitBoldedText,
} from "./BenefotsBlock.styled";
import { ReactComponent as ShieldIcon } from "assets/icons/ShieldIcon.svg";
import { ReactComponent as DeliveryIcon } from "assets/icons/DeliveryIcon.svg";
import { ReactComponent as RefundIcon } from "assets/icons/RefundIcon.svg";

const BenefitsBlock: React.FC = () => {
  return (
    <StyledBenefitsContainer>
      <Benefit>
        <DeliveryIcon />
        Dostawa w ciągu&nbsp;<BenefitBoldedText> 2 dni</BenefitBoldedText>
      </Benefit>
      <Benefit>
        <RefundIcon />
        <BenefitBoldedText>Bezpłatny </BenefitBoldedText>&nbsp;zwrot
      </Benefit>
      <Benefit>
        <ShieldIcon />
        <BenefitBoldedText>1 rok </BenefitBoldedText>&nbsp;gwarancji
      </Benefit>
    </StyledBenefitsContainer>
  );
};

export default BenefitsBlock;
