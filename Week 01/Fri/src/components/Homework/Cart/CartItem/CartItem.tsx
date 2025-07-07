type props = {
  itemID: number,
  itemImage: string;
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
  removeItem: (id: number) => void
};

const CartItem = ({ itemID, itemName, itemImage, itemQuantity, itemPrice, removeItem }: props) => {
  return (
    <a className="cart__item flex items-center justify-between text-sm cursor-pointer">
      <div className="flex items-center justify-between gap-1">
        {/* Item image */}
        <div className="relative">
          <button className="absolute top-0 left-0 rounded-[50%] text-red-600 text-xs font-semibold bg-gray-200 p-2 cursor-pointer"
            onClick={() => removeItem(itemID)}
          >
            Xóa
          </button>
          <img src={itemImage} alt={itemName} width={60} height={60} />
        </div>
        {/* Item's information */}
        <p>{itemName}</p>
      </div>

      {/* Quantity & price */}
      <p className="font-bold">
        {itemQuantity} x{' '}
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(itemPrice)}
      </p>
    </a>
  );
};

export default CartItem;
