import { useState } from 'react';
import { HeroSection, ProductGrid, Modal } from '../components';
import { products } from '../data/products';

export const HomePage = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedProducts] = useState(products.slice(0, 8)); // Show first 8 products

  return (
    <div>
      <HeroSection />

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Check out our latest and most popular items
          </p>
        </div>

        <ProductGrid
          products={selectedProducts}
          onQuickView={setQuickViewProduct}
        />
      </section>

      {/* Quick View Modal */}
      <Modal
        isOpen={!!quickViewProduct}
        title="Quick View"
        onClose={() => setQuickViewProduct(null)}
      >
        {quickViewProduct && (
          <div className="space-y-4">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold">{quickViewProduct.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {quickViewProduct.description}
            </p>
            <div className="text-2xl font-bold text-blue-600">
              ${quickViewProduct.price.toFixed(2)}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
