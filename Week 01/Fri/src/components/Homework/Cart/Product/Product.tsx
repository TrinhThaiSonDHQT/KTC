import { CiCirclePlus } from 'react-icons/ci';
import type { CartItem } from './Cart';

type props = {
  productID: number;
  productImage: string;
  productName: string;
  productPrice: number;
  addItem: (item: CartItem) => void;
};

const Product = ({
  productID,
  productImage,
  productName,
  productPrice,
  addItem,
}: props) => {
  const handleAddItem = () => {
    const item = {
      id: productID,
      image: productImage,
      name: productName,
      price: productPrice,
      quantity: 1,
    };
    addItem(item);
  };

  return (
    <a className="product__item text-l bg-white px-2 pb-2 cursor-pointer">
      <img
        className="w-[150px] h-[150px] mx-auto"
        src={productImage}
        alt={`${productName} image`}
      />
      <p className="text-sm truncate">{productName}</p>
      <p className="text-base font-bold text-green-700 my-4">
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(productPrice)}
      </p>
      <button
        className="text-green-800 text-sm w-full flex justify-center gap-3 items-center p-2 border-1 border-solid border-green-800 rounded cursor-pointer"
        onClick={handleAddItem}
      >
        <CiCirclePlus size={20} />
        <span className="truncate">Thêm vào giỏ hàng</span>
      </button>
    </a>
  );
};

export default Product;
