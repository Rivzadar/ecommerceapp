import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Rating } from './Rating';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700 h-250">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onQuickView && onQuickView(product)}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          <Link to={`/product/${product.id}`} className="hover:text-blue-600">
            {product.name}
          </Link>
        </h3>

        <div className="mb-3">
          <Rating rating={product.rating} reviews={product.reviews} size="sm" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            className="hidden sm:block"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
