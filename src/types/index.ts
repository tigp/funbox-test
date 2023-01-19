export type Item = {
  id: string;
  title: string;
  description: string[];
  weight: number;
  isAvailable: boolean;
};

export type CardProp = {
  product: Item;
};
