import React, { useState } from 'react';

import Datepicker from '../../components/Form/Datepicker';
import FormSelect from '../../components/Form/Select';

import styles from './trip-planner.module.scss';

const TripPlannerPage: React.FC = () => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('2021-07-31');
  return (
    <section className={styles.plannerWrapper}>
      <div className={styles.plannerWrapper__filterCountry}>
        <FormSelect
          id='country-filter'
          label='Country'
          placeholder='Choose the country'
          value={value}
          options={[{ label: 'test', value: '1' }]}
          onChange={setValue}
        />
      </div>
      <div className={styles.plannerWrapper__filterCity}>
        <FormSelect
          id='city-filter'
          label='City'
          placeholder='Choose the city'
          value={value}
          options={[{ label: 'test', value: '1' }]}
          onChange={setValue}
        />
      </div>
      <div className={styles.plannerWrapper__filterDate}>
        <Datepicker
          id='datepicker'
          label='Date'
          availableDates={['2021-07-30', '2021-07-31']}
          selectedDate={date}
          onSelect={setDate}
        />
      </div>
      <article className={styles.products}>
        <span className={styles.products__alert}>Select country first</span>
      </article>
    </section>
  );
};

export default TripPlannerPage;
