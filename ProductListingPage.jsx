import { useState, useMemo } from 'react';
import { SearchBar, CategoryFilter, ProductGrid, Modal, Breadcrumb } from '../components';
import { products, categories } from '../data/products';

export const ProductListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      filtered = [...filtered].reverse();
    }

    return filtered;
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Products' }]} />

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 mt-6">
          All Products
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Showing {filteredProducts.length} products
        </p>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClear={() => setSearchTerm('')}
          />

          {/* Category Filter */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Categories
            </h3>
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Sort By
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          onQuickView={setQuickViewProduct}
        />
      </div>

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
