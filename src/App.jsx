import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 29.99, inStock: true },
    { id: 2, name: 'Product 2', price: 19.99, inStock: false },
    { id: 3, name: 'Product 3', price: 39.99, inStock: true },
    // Add more products as needed
  ]);
  // TODO: Implement state to manage filtering
  const [filter, setFilter] = useState('all');

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // 'all' filter
  });

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      
      <button onClick={() => setFilter('inStock')}>In Stock</button>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
{/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}