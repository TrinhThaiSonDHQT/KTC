'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CartContext } from '@/contexts/CartProvider';
import { ProductType } from '@/types';

export const dynamic = 'force-static';

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const cartContext = useContext(CartContext);

  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: ProductType
  ) => {
    event.preventDefault();
    // console.log(product);
    product.originalPrice = product.price + 200;
    cartContext?.addToCart(product);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        'https://api.escuelajs.co/api/v1/products?offset=0&limit=15'
      );
      const products = await response.json();
      // console.log(products);
      setProducts(products);
    };

    getProducts();
  }, []);

  // console.log(cartContext?.cart);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <Link
            href="/"
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
          >
            <div className="flex flex-col gap-1 p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Image
                  src={product.images[0]}
                  width={195}
                  height={195}
                  alt={product.title}
                  priority={product.id < 10 ? true : false}
                  quality={75}
                  placeholder="empty"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full rounded-lg object-fill"
                />
              </div>
              <div className="min-h-[40px] flex flex-col justify-center">
                <h3 className="text-sm font-medium text-gray-800  ">
                  {product.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-red-600 font-bold">${product.price}</div>
                <div className="text-gray-500 line-through">
                  ${product.price + 200}
                </div>
              </div>
              <button
                className="rounded text-blue-400 font-semibold bg-blue-100 py-2 w-full cursor-pointer"
                onClick={(e) => addToCart(e, product)}
              >
                Mua ngay
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProductList;
