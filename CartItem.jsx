import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from './Button';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700 py-4">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {item.category}
        </p>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-right">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Subtotal</p>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-2"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};
