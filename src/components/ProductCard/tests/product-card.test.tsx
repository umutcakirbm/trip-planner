import { render, screen } from '@testing-library/react';
import React from 'react';

import ProductCard, { ProductCardProps } from '..';

describe('components - productCard', () => {
  const params: ProductCardProps = {
    id: 1,
    image: 'test-image.jpg',
    link: '/test.html',
    title: 'Test Title',
    description: 'Test Description',
    price: '€10.50',
  };

  const setup = (props: ProductCardProps = params) => {
    const observe = jest.fn();
    const unobserve = jest.fn();
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    })) as unknown as {
      new (
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit | undefined,
      ): IntersectionObserver;
      prototype: IntersectionObserver;
    };
    const component = (_props = props) => <ProductCard {..._props} />;
    const utils = render(component());
    return { rerender: (_props: ProductCardProps) => utils.rerender(component(_props)) };
  };

  it('image should not be set because of lazy loading', () => {
    setup();
    expect(screen.queryByAltText(params.title)).not.toBeInTheDocument();
  });

  it('link and title should be set', () => {
    setup();
    expect(screen.getByText(params.title)).toHaveAttribute('href', params.link);
  });

  it('description should be set', () => {
    setup();
    expect(screen.getByText(params.description)).toBeInTheDocument();
  });

  it('price should be set', () => {
    setup();
    expect(screen.getByText(params.price)).toBeInTheDocument();
  });

  it('discount price should not be set if not exist', () => {
    setup();
    expect(screen.getByText(params.price)).not.toHaveClass('productCard__price_discounted');
    const discountEl = screen.getByText(params.price).querySelector('span');
    expect(discountEl).not.toBeInTheDocument();
  });

  it('discount price should be set if exist', () => {
    setup({ ...params, discountPrice: '€15.00' });
    expect(screen.getByText(params.price)).toHaveClass('productCard__price_discounted');
    const discountEl = screen.getByText(params.price).querySelector('span');
    expect(discountEl).toBeInTheDocument();
  });
});
