'use client';

import { Search, ShoppingCart, MapPin } from 'lucide-react';
import Navigator from './Navigator';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/contexts/CartProvider';

const Header = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="bg-yellow-400 shadow-md text-slate-800 px-7 py-3 flex flex-col gap-1">
      <header>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="text-xl font-bold text-black">
                thegioididong
              </span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Bạn tìm gì..."
                  className="w-full px-4 py-2 rounded-3xl bg-white border border-gray-300 outline-none"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 " />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-1 text-black">
                <span>Đăng nhập</span>
              </Link>
              <Link href="/cart" className="relative text-black">
                <ShoppingCart className="w-7 h-7" />
                {cartContext?.cart && cartContext.cart.length > 0 && (
                  <span className="text-xs text-yellow-400 font-semibold bg-black rounded-[50%] px-2 py-1 absolute top-[-10px] right-[-10px]">
                    {cartContext.cart.length}
                  </span>
                )}
              </Link>
              <div className="flex items-center space-x-1 text-black">
                <MapPin className="w-5 h-5" />
                <span>Hà Nội</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navigator />
    </div>
  );
};

export default Header;
