import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem, CartSummary, Breadcrumb, Button, Modal } from '../components';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 50 ? 0 : 10;

  const handleCheckout = () => {
    setShowCheckoutModal(true);
    // Simulate checkout
    setTimeout(() => {
      setShowCheckoutModal(false);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Breadcrumb items={[{ label: 'Cart' }]} />

          <div className="flex flex-col items-center justify-center py-20">
            <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Add some products to your cart to get started
            </p>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Cart' }]} />

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white my-8">
          Shopping Cart ({cartItems.length} items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            {/* Continue Shopping Button */}
            <Link to="/products" className="mt-4 inline-block">
              <Button variant="secondary">Continue Shopping</Button>
            </Link>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              subtotal={subtotal}
              tax={tax}
              shipping={shipping}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <Modal
        isOpen={showCheckoutModal}
        title="Order Placed!"
        onClose={() => setShowCheckoutModal(false)}
      >
        <div className="text-center py-4">
          <div className="text-4xl mb-4">✓</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Thank you for your purchase! Your order has been placed successfully.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Order confirmation has been sent to your email.
          </p>
        </div>
      </Modal>
    </div>
  );
};
