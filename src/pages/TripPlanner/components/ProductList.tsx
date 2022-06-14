import React from 'react';

import ProductCard, { ProductCardProps } from '../../../components/ProductCard';
import styles from '../styles.module.scss';

export type ProductListProps = {
  products?: ProductCardProps[];
  alert?: string;
  isPending?: boolean;
};

const ProductList: React.FC<ProductListProps> = ({
  products = [],
  alert = '',
  // isPending = true,
}: ProductListProps) => {
  return (
    <div className={`${styles.products} my-8`}>
      {alert ? (
        <span className={styles.products__alert}>{alert}</span>
      ) : (
        <div className={`${styles.products__items} mt-24`}>
          {products.map((product) => (
            <ProductCard key={product.link} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
