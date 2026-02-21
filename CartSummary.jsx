import { Button } from './Button';

export const CartSummary = ({ subtotal, tax = 0, shipping = 10, onCheckout }) => {
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Order Summary
      </h2>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        {tax > 0 && (
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
        <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};
