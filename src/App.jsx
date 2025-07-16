import React, { useState } from 'react';
import ProductList from './components/ProductList';


const App = () => {
  // TODO: Define initial product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Phone', price: 699, inStock: false },
    { id: 3, name: 'Tablet', price: 499, inStock: true },
  ]);
  // TODO: Implement state to manage filtering
  const [filter, setFilter] = useState('all');


  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // 'all' filter
  });

  //remove product
  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      
      <button onClick={() => setFilter('inStock')}>In Stock</button>
      <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      <button onClick={() => setFilter('all')}>All Products</button>
      <br /><br />
      <ProductList products={filteredProducts} 
      onRemoveProduct={removeProduct}/>

    </div>
  );
};

export default App;
{/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}