import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import RandomQuote from '@/components/RandomQuote';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col md:flex-row container mx-auto bg-background transition-colors dark:bg-[#0a0a0a]">
        <div className="w-full md:w-64 flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Our Products</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Browse our latest collection of premium items.
            </p>
            <RandomQuote />
          </div>
          <ProductGrid />
        </div>
      </main>
    </>
  );
}
