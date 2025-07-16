export type ProductType = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  images: string[];
};

export type CartContextType = {
  cart: CartItemType[],
  addToCart: (product: ProductType) => void,
};

export type CartItemType = {
  item: ProductType,
  quantity: number,
}
