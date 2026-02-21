# TechStore - E-Commerce Frontend Application

A modern, fully-functional e-commerce frontend application built with React.js and Tailwind CSS. This project demonstrates best practices in React development with a complete shopping experience including product browsing, filtering, and cart management.

## 🎯 Project Overview

TechStore is a responsive e-commerce application featuring a curated selection of tech products. The application is built with modern React patterns including functional components, hooks, and context API for state management.

## ✨ Features Implemented

### Core Features
- ✅ **5+ Pages**: Home, Products, Product Details, Cart, Login/Signup, 404 Page
- ✅ **15+ Components**: Reusable and modular UI components
- ✅ **Product Listing**: Browse 15+ tech products with details
- ✅ **Search Functionality**: Real-time product search
- ✅ **Category Filtering**: Filter products by category
- ✅ **Product Sorting**: Sort by price, rating, and newest
- ✅ **Add to Cart**: Add products with customizable quantity
- ✅ **Cart Management**: View, update, and remove cart items
- ✅ **Responsive Design**: Mobile-first approach, works on all devices

### Advanced Features (Bonus)
- ✅ **Dark Mode**: Full dark theme support with toggle
- ✅ **Context API**: Global state management for cart and theme
- ✅ **Local Storage**: Persist cart and theme preferences
- ✅ **Animations**: Smooth transitions and loading effects
- ✅ **Quick View**: Modal preview of products
- ✅ **Order Summary**: Tax, shipping, and total calculations
- ✅ **Related Products**: Product recommendations based on category

## 📁 Folder Structure

```
ecommerce app/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Rating.jsx
│   │   ├── Loader.jsx
│   │   ├── Modal.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   └── index.js
│   ├── pages/                # Page components
│   │   ├── HomePage.jsx
│   │   ├── ProductListingPage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── AuthPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── index.js
│   ├── context/              # Context API
│   │   └── CartContext.jsx
│   ├── data/                 # Dummy data
│   │   └── products.js
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "ecommerce app"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   The application will open automatically at `http://localhost:3000`

## 📚 Components Reference

### UI Components
- **Button**: Versatile button with multiple variants and sizes
- **Input**: Text input with icon support
- **Rating**: Star rating display with review count
- **Loader**: Spinner animation with full-screen option
- **Modal**: Reusable modal dialog with customizable content

### Feature Components
- **Navbar**: Navigation with cart badge and dark mode toggle
- **Footer**: Footer with social links and company info
- **HeroSection**: Eye-catching banner on home page
- **ProductCard**: Individual product card with quick view
- **ProductGrid**: Responsive grid for product display
- **SearchBar**: Quick search functionality
- **CategoryFilter**: Filter products by category
- **CartItem**: Cart item row with quantity controls
- **CartSummary**: Order summary with calculations
- **Breadcrumb**: Navigation breadcrumbs

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode**: Full dark theme support
- **Responsive**: Mobile-first responsive design
- **Animations**: Smooth transitions and effects

## 🔄 State Management

### Context API
The application uses React Context API for global state management:

```javascript
// Cart Context provides:
- cartItems: Array of products in cart
- addToCart(): Add product to cart
- removeFromCart(): Remove product from cart
- updateQuantity(): Update product quantity
- clearCart(): Clear all cart items
- getTotalPrice(): Calculate cart total
- getTotalItems(): Get total item count
- darkMode: Dark mode toggle state
- setDarkMode(): Toggle dark mode
```

## 💾 Local Storage

The application persists the following data to Local Storage:
- **cart**: Shopping cart items
- **darkMode**: Dark mode preference

## 🛍️ Product Data

The application includes 15 sample tech products across multiple categories:
- **Categories**: Electronics, Storage, Peripherals, Accessories, Lighting, Cables, Cooling
- **Product Info**: Name, price, rating, reviews, description, features, image

## 📱 Pages

### 1. **Home Page** (`/`)
- Hero section with call-to-action
- Featured products grid
- Quick view modal

### 2. **Products Page** (`/products`)
- Full product catalog
- Search functionality
- Category filtering
- Sorting options (price, rating, newest)
- Responsive product grid

### 3. **Product Details Page** (`/product/:id`)
- Large product image
- Detailed description
- Product features list
- Quantity selector
- Related products
- Breadcrumb navigation

### 4. **Cart Page** (`/cart`)
- List of cart items
- Quantity controls
- Item removal
- Order summary with tax and shipping
- Checkout button
- Empty cart state

### 5. **Login/Signup Page** (`/auth`)
- Toggle between login and signup
- Email and password fields
- Form validation
- Social login options
- Remember me checkbox

### 6. **404 Page**
- Not found error page
- Link back to home

## 🎯 Key Technologies

- **React 18.2**: UI library
- **React Router v6**: Page routing
- **Tailwind CSS 3.3**: Styling
- **Vite 5.0**: Build tool
- **Lucide Icons**: Icon library
- **Context API**: State management

## 🌙 Dark Mode Usage

Click the sun/moon icon in the navbar to toggle between light and dark modes. Your preference is automatically saved.

## 🔍 Search & Filter Features

### Search
- Real-time search across product names and descriptions
- Clear button for quick reset

### Filters
- **Category Filter**: Select from 8 categories
- **Sort Options**: 
  - Featured (default)
  - Newest
  - Price: Low to High
  - Price: High to Low
  - Top Rated

## 🛒 Cart Features

- Add products with custom quantity
- Update item quantities
- Remove items with confirmation
- Automatic tax calculation (10%)
- Free shipping on orders above $50
- Cart persistence across sessions
- Cart badge showing item count

## 📊 Performance

- Optimized component rendering with memoization
- Efficient state updates
- Lazy loading with Suspense-ready structure
- Responsive images
- Clean CSS with Tailwind utilities

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📝 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎓 Functional Components & Hooks Used

The entire application uses functional components with the following hooks:
- **useState**: State management
- **useContext**: Access cart context
- **useEffect**: Side effects and data fetching
- **useMemo**: Optimize filtering and sorting
- **useParams**: Get URL parameters
- **useNavigate**: Programmatic navigation

## 🔐 Security Notes

- Input validation on forms
- XSS protection with React's built-in escaping
- No sensitive data stored in Local Storage
- Ready for backend integration

## 🚀 Future Enhancements

- Payment integration (Stripe, PayPal)
- User authentication backend
- Product reviews and ratings system
- Wishlist functionality
- Product comparison
- Advanced filtering (price range, brand)
- Order history
- Admin dashboard
- Multiple language support
- Newsletter subscription

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a modern e-commerce frontend solution showcasing React best practices.

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**Happy Shopping! 🛍️**
