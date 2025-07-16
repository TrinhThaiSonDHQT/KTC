'use client';

import { CartContext } from '@/contexts/CartProvider';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';

const CartPage = () => {
  const cartContext = useContext(CartContext);

  // const deleteItem = (id: number) => {
  //   setCartItems(cartItems.filter(item => item.id !== id));
  // };

  // const updateQuantity = (id, newQuantity) => {
  //   if (newQuantity < 1) return;
  //   setCartItems(cartItems.map(item =>
  //     item.id === id ? { ...item, quantity: newQuantity } : item
  //   ));
  // };

  const calculateTotal = () => {
    if (cartContext?.cart && cartContext.cart.length > 0) {
      return cartContext?.cart.reduce(
        (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
        0
      );
    } else return 0;
  };

  const calculateOriginalTotal = () => {
    if (cartContext?.cart && cartContext.cart.length > 0) {
      return cartContext?.cart.reduce(
        (total, cartItem) =>
          total + cartItem.item.originalPrice * cartItem.quantity,
        0
      );
    } else return 0;
  };

  const totalSavings = calculateOriginalTotal() - calculateTotal();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
        <p className="text-gray-600">
          {cartContext?.cart.length} items in your cart
        </p>
      </div>

      {cartContext?.cart.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500">Add some items to get started</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cartContext?.cart.map((cartItem) => (
              <div
                key={cartItem.item.id}
                className="bg-gray-50 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={cartItem.item.images[0]}
                    width={30}
                    height={30}
                    alt={cartItem.item.title}
                    className="w-30 h-30 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {cartItem.item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-green-600">
                      ${cartItem.item.price.toFixed(2)}
                    </span>
                    {cartItem.item.originalPrice > cartItem.item.price && (
                      <span className="text-lg text-gray-500 line-through">
                        ${cartItem.item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Quantity:</span>
                    <div className="flex items-center border rounded-lg text-slate-700">
                      <button
                        // onClick={() =>
                        //   updateQuantity(item.id, item.quantity - 1)
                        // }
                        className="p-2 hover:bg-gray-100 rounded-l-lg cursor-pointer"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 border-x">
                        {cartItem.quantity}
                      </span>
                      <button
                        // onClick={() =>
                        //   updateQuantity(item.id, item.quantity + 1)
                        // }
                        className="p-2 hover:bg-gray-100 rounded-r-lg cursor-pointer"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">
                      ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                    </div>
                    {cartItem.item.originalPrice > cartItem.item.price && (
                      <div className="text-sm text-gray-500 line-through">
                        $
                        {(
                          cartItem.item.originalPrice * cartItem.quantity
                        ).toFixed(2)}
                      </div>
                    )}
                  </div>

                  <button
                    // onClick={() => deleteItem(item.id)}
                    className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                    <span className="cursor-pointer">Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-2 mb-4">
                {totalSavings > 0 && (
                  <>
                    <div className="flex justify-between text-gray-600">
                      <span>Original Total:</span>
                      <span className="line-through">
                        ${calculateOriginalTotal().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>You Save:</span>
                      <span>-${totalSavings.toFixed(2)}</span>
                    </div>
                  </>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>${(calculateTotal() * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ${(calculateTotal() + calculateTotal() * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
