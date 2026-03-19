'use client';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);

  return (
    <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
        {}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1 leading-snug">
          {product.name}
        </h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white dark:focus:ring-offset-gray-900"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
