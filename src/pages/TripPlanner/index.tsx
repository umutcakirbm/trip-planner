import React from 'react';

// import { useSearchProductsQuery } from '../../services/apis/product/api';

import Filter from './components/Filter';
import ProductList from './components/ProductList';
import styles from './styles.module.scss';



const TripPlannerPage: React.FC = () => {
  // const { data, error, isLoading } = useSearchProductsQuery({ date: '2021-07-30', cityId: 66154 });
  return (
    <section className={styles.plannerWrapper}>
      <Filter />
      <ProductList alert='Select country first'/>
    </section>
  );
};

export default TripPlannerPage;
