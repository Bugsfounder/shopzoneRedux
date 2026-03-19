'use client';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const { category, priceRange } = useSelector((state) => state.filter);

  // Level 3 optimization: useMemo to prevent recalculating filtered products on every render
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category === 'All' || product.category === category;
      const matchPrice = product.price <= priceRange;
      return matchCategory && matchPrice;
    });
  }, [category, priceRange]);

  if (filteredProducts.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
        <p className="text-lg mb-2">No products found matching your filters.</p>
        <p className="text-sm">Try expanding your price range or selecting a different category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
