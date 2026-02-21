import { ProductCard } from './ProductCard';
import { Loader } from './Loader';

export const ProductGrid = ({ products = [], loading = false, onQuickView }) => {
  if (loading) {
    return <Loader fullScreen />;
  }

  if (products.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-12">
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
          No products found
        </p>
        <p className="text-gray-400 dark:text-gray-500">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};
