import React from 'react';

import ProductCard, { ProductCardProps } from '../../../components/ProductCard';
import Spinner from '../../../components/Spinner';
import styles from '../styles.module.scss';

export type ProductListProps = {
  products?: ProductCardProps[];
  alert?: string;
  isPending?: boolean;
};

const ProductList: React.FC<ProductListProps> = ({
  products = [],
  alert = '',
  isPending = true,
}: ProductListProps) => {
  return (
    <div className={`${styles.products} my-8`}>
      {alert ? (
        <span className={styles.products__alert}>{alert}</span>
      ) : isPending ? (
        <span className={styles.products__alert}>
          Loading
          <Spinner className={styles.products__spinner} />
        </span>
      ) : (
        <div className={`${styles.products__items} mt-24`}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
