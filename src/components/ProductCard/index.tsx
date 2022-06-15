import React, { useRef, useState } from 'react';

import { useIntersection } from '../../hooks/useIntersection';

import styles from './styles.module.scss';

export type ProductCardProps = {
  id: number;
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
  const [isCardInView, setIsCardInView] = useState(false);
  const imgRef = useRef<HTMLPictureElement>(null);

  useIntersection(imgRef, () => {
    setIsCardInView(true);
  });

  return (
    <article className={styles.productCard}>
      <div className={`${styles.productCard__card} mr-12`}>
        <picture className={styles.productCard__imageWrapper} ref={imgRef}>
          {isCardInView && (
            <img
              alt={title}
              className={styles.productCard__image}
              src={image}
              srcSet={`${image} 2x`}
            />
          )}
        </picture>
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
