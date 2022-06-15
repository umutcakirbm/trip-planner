import React from 'react';

import { useTripPlannerState } from '../../services/pages/trip-planner/hooks';

import Filter from './components/Filter';
import ProductList from './components/ProductList';
import styles from './styles.module.scss';

const TripPlannerPage: React.FC = () => {
  const [filters, setFilters, productList, productListState, isDisabled, isPending] =
    useTripPlannerState();

  return (
    <section className={styles.plannerWrapper}>
      <Filter
        filters={filters}
        setFilters={setFilters}
        isDisabled={isDisabled}
        isPending={isPending.locations}
      />
      <ProductList products={productList} alert={productListState} isPending={isPending.products} />
    </section>
  );
};

export default TripPlannerPage;
