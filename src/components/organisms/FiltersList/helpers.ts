export const genderOptions = [
  {
    value: "man",
    text: "Mężczyzna",
  },
  {
    value: "woman",
    text: "Kobieta",
  },
];
export const brandOptions = [
  {
    value: "nike",
    text: "Nike",
  },
  {
    value: "adidas",
    text: "Adidas",
  },
];

export enum EFilterMehods {
  LESS = "<",
  LESS_EQUAL = "<=",
  EQUAL = "==",
  GREATER = ">",
  GREATER_EQUAL = ">=",
  ARRAY_CONTAINS_ANY = "array-contains-any",
}
