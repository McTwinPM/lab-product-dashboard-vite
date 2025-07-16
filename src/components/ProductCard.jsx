import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    
    <div className={`${styles.productCard} ${!product.inStock ? styles.outOfStockClass : ''}`}>

      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      {/* TODO: Display product name */}
      <h2 className={styles.productName}>{product.name}</h2>

      {/* TODO: Display product price */}
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>

      {/* TODO: Show if the product is in stock or out of stock */}
      <p className={styles.productAvailability}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
        
      </p>
      <button className={styles.removeButton}
      onClick={() => onRemove(product.id)}>Remove Product</button>
    </div>
  );
};

export default ProductCard;
