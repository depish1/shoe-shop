export const formatPrice = (price: number) => {
  const priceAsString = `${price}`.replace(".", ",");
  const dotIndex = priceAsString.indexOf(".");
  switch (priceAsString.length - dotIndex + 1) {
    case 1:
      return `${priceAsString}0 zł`;
    case 2:
      return `${priceAsString}00 zł`;
    default:
      return `${priceAsString} zł`;
  }
};
