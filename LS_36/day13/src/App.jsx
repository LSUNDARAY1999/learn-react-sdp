import { useMemo, useState } from "react";
import { products } from "./data/products";
import ProductItem from "./components/ProductItem";
import './App.css'
export default function App() {
  const [search, setSearch] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  const ITEM_HEIGHT = 70;
  const VISIBLE_COUNT = 8;

  // 🔥 Memoization: filter only when search changes
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // 🔥 Virtualization calculations
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleItems = filteredProducts.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">
          Performance Optimization Demo
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search product..."
          className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Virtualized List */}
        <div
          className="h-[300px] overflow-y-auto border rounded"
          onScroll={(e) => setScrollTop(e.target.scrollTop)}
        >
          <div
            style={{ height: filteredProducts.length * ITEM_HEIGHT }}
            className="relative"
          >
            <div
              style={{ transform: `translateY(${startIndex * ITEM_HEIGHT}px)` }}
              className="absolute w-full space-y-2"
            >
              {visibleItems.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}

              {visibleItems.length === 0 && (
                <p className="text-center text-gray-500 mt-10">
                  No products found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
