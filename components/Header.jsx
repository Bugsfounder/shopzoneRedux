'use client';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { ShoppingCart, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/70 dark:bg-black/70 border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
          ShopZone
        </Link>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {themeMode === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          </button>
          
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {cartTotalQuantity > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartTotalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
