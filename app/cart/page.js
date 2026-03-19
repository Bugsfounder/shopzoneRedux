'use client';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@/store/cartSlice';
import Header from '@/components/Header';
import Link from 'next/link';
import { ArrowLeft, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors mr-4">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-bold">Your Cart</h1>
          </div>

          {items.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 text-center shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">Your shopping cart is empty.</p>
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl bg-gray-100 dark:bg-gray-800" />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">${item.price}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end ml-4 h-full justify-between">
                      <span className="text-lg font-bold">${item.totalPrice}</span>
                      <button 
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors mt-4"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-24">
                  <h2 className="text-xl font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">Order Summary</h2>
                  
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-medium">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  
                  <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${totalPrice}</span>
                  </div>
                  
                  <button className="w-full mt-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
