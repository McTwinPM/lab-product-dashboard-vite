import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    
    <div className>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      className={styles.productCard}
      <img src={product.image} alt={product.name} className={styles.productImage} />
      {/* TODO: Display product name */}
      <h2 className={styles.productName}>{product.name}</h2>

      {/* TODO: Display product price */}
      

      {/* TODO: Show if the product is in stock or out of stock */}
      
    </div>
  );
};

export default ProductCard;
