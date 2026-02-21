import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Rating, Breadcrumb, Loader, ProductGrid } from '../components';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ChevronLeft } from 'lucide-react';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return <Loader fullScreen />;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>

        <Breadcrumb
          items={[
            { label: 'Products', href: '/products' },
            { label: product.category, href: `/products?category=${product.category}` },
            { label: product.name },
          ]}
        />

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          {/* Image */}
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <Rating rating={product.rating} reviews={product.reviews} size="lg" />

            {/* Price */}
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Price</p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 items-center">
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center font-semibold dark:bg-gray-900 dark:text-white"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  +
                </button>
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Availability:</span>
                <span className="font-semibold text-green-600">In Stock</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Shipping:</span>
                <span className="font-semibold">Free on orders above $50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Returns:</span>
                <span className="font-semibold">30 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Products
          </h2>
          <ProductGrid products={relatedProducts} />
        </section>
      </div>
    </div>
  );
};
