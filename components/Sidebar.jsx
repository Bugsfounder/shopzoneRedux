'use client';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPriceRange } from '@/store/filterSlice';
import { categories } from '@/data/products';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { category: currentCategory, priceRange } = useSelector((state) => state.filter);

  return (
    <aside className="w-full md:w-64 p-6 border-r border-gray-200 dark:border-gray-800 h-full">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>
      
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => dispatch(setCategory(cat))}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentCategory === cat
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
          Max Price: ${priceRange}
        </h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={priceRange}
          onChange={(e) => dispatch(setPriceRange(Number(e.target.value)))}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$0</span>
          <span>$1000+</span>
        </div>
      </div>
    </aside>
  );
}
