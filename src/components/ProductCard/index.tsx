import React from 'react';

import styles from './styles.module.scss';

export type ProductCardProps = {
  image: string;
  link: string;
  title: string;
  description: string;
  price: string;
  discountPrice?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  link,
  title,
  description,
  price,
  discountPrice,
}: ProductCardProps) => {
  return (
    <article className={styles.productCard}>
      <div className={`${styles.productCard__card} mr-12`}>
        <div className={styles.productCard__imageWrapper}>
          <img
            alt={title}
            loading='lazy'
            className={styles.productCard__image}
            src={image}
            srcSet={`${image}&dpr=2 2x`}
          />
        </div>
        <h3 className={`${styles.productCard__title} fs-md fw-500 mb-0 mt-12`}>
          <a className={styles.productCard__link} href={link} target='_blank' rel='noreferrer'>
            {title}
          </a>
        </h3>
        <span className={`${styles.productCard__description} fs-sm fw-400`}>{description}</span>
        <span
          className={`${styles.productCard__price} ${
            discountPrice && styles.productCard__price_discounted
          } fw-500 mb-12`}
        >
          {price}
          {discountPrice && (
            <span className={`${styles.productCard__price_discount} fw-400 mb-12 ml-8`}>
              {discountPrice}
            </span>
          )}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
