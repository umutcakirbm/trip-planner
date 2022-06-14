import React from 'react';

import Filter from './components/Filter';
import ProductList from './components/ProductList';
import styles from './styles.module.scss';

const TripPlannerPage: React.FC = () => {
  
  return (
    <section className={styles.plannerWrapper}>
      <Filter />
      <ProductList alert='Select country first'/>
    </section>
  );
};

export default TripPlannerPage;
