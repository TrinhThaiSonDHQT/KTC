import styles from './Cart.module.css';
import { Recommend, Products } from './data/Data';
import Product from './Product/Product';
import { FaBars } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { useState } from 'react';
import CartItem from './CartItem/CartItem';

// Define the cart item type
export interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (item: CartItem) => {
    setCart((prev) => {
      const existedItem = prev.find((cartItem) => cartItem.id === item.id);
      // Increase quantity if item exists
      if (existedItem) {
        const updateCart = prev.map((cartItem) => {
          if (cartItem.id === item.id) {
            cartItem.quantity += item.quantity;
            return cartItem;
          } else return cartItem;
        });
        return updateCart;
      }
      // Add new item if not found
      return [...prev, item];
    });

    calTotalPrice();
  };

  const handleRemoveItem = (productID: number) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== productID);
      return updatedCart;
    });

    calTotalPrice();
  };

  const calTotalPrice = () => {
    let totalPrice = 0;
    setCart((prev) => {
      prev.map((item) => {
        totalPrice += item.price * item.quantity;
      });
      setTotalPrice(totalPrice);
      return prev;
    });
  };

  return (
    <div className="cart bg-[#F8F8FC]">
      {/* Header */}
      <div className="header flex items-center justify-between gap-4 bg-white py-4 shadow-2xl]">
        {/* Logo */}
        <a>
          <img
            src="https://bigmarket.vn/_next/image?url=https%3A%2F%2Fcloud.bigmarket.vn%2Fcdn%2Fupload%2Ffiles%2Fprofile%2Flogo.png%3Fv%3D1&w=256&q=75"
            alt="logo"
            className="w-[22]"
          />
        </a>

        {/* Category */}
        <div className="category cursor-pointer p-2 rounded border-1 border-solid border-gray-300 flex items-center gap-2">
          <FaBars size={20} />
          <span>Danh mục sản phẩm</span>
        </div>

        {/* Search bar */}
        <form className="search-bar px-3 py-1 flex items-center justify-between flex-1 border-2 border-solid border-gray-300 rounded h-[40px]">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="outline-0 flex-1"
          />
          <button type="submit" className="cursor-pointer">
            <CiSearch size={25} />
          </button>
        </form>

        {/* Cart */}
        <div className={`relative ${styles.cart}`}>
          <div className="flex items-center justify-between gap-2 cursor-pointer hover:(bg-green-600 text-gray-50)">
            <IoCartOutline size={35} />
            <div className="text-sm">
              <p>Giỏ hàng của bạn</p>
              <p>
                (<strong>{cart.length}</strong>) sản phẩm
              </p>
            </div>
          </div>

          <div
            className={`absolute right-0 bg-white p-2 w-[350px] shadow-2xl ${styles.dropDownList}`}
          >
            {cart.length > 0 ? (
              <>
                {/* Items */}
                <div className="cart__items flex flex-col gap-2 mb-2">
                  {cart.map((item) => {
                    return (
                      <CartItem
                        key={item.id}
                        itemID={item.id}
                        itemImage={item.image}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemQuantity={item.quantity}
                        removeItem={handleRemoveItem}
                      />
                    );
                  })}
                  <hr className="text-gray-400" />
                </div>

                <div>
                  {/* Total price */}
                  <div className="text-lg font-bold flex items-center justify-between mb-3 ">
                    <span>Tổng cộng</span>
                    <span className="text-red-600">
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(totalPrice)}
                    </span>
                  </div>

                  {/* See cart */}
                  <a className="block text-center text-white font-semibold bg-orange-500 p-2 rounded cursor-pointer">
                    Xem giỏ hàng
                  </a>
                </div>
              </>
            ) : (
              <span className="block text-center p-1 font-semibold">
                Giỏ hàng trống!
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        {/* Title */}
        <h1 className="text-2xl font-bold my-4">Thực phẩm khô</h1>

        {/* Recommend */}
        <div className="recommend my-5 flex items-center gap-x-3">
          {Recommend.map((item, index) => {
            return (
              <a
                key={index}
                className="text-sm bg-white border border-primary py-1 px-2 rounded whitespace-nowrap cursor-pointer"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Filter */}
        <div className="flex justify-end p-3 mb-1 bg-white">
          <div className="flex items-center gap-x-[8px]">
            <label className="text-sm">Sắp xếp theo:</label>
            <span className="text-sm cursor-pointer px-2 py-1 border-1 boder-solid border-gray-300 rounded">
              Giá tăng dần
            </span>
            <span className="text-sm cursor-pointer px-2 py-1 border-1 boder-solid border-gray-300 rounded">
              Giá giảm dần
            </span>
            <span className="text-sm cursor-pointer px-2 py-1 border-1 boder-solid border-gray-300 rounded">
              Bán chạy
            </span>
            <span className="text-sm cursor-pointer px-2 py-1 border-1 boder-solid border-gray-300 rounded">
              Giảm giá
            </span>
          </div>
        </div>

        {/* Products */}
        <div className="product gap-2 grid grid-cols-5">
          {Products.map((item) => {
            return (
              <Product
                key={item.id}
                productID={item.id}
                productImage={item.image}
                productName={item.name}
                productPrice={item.price}
                addItem={handleAddItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
