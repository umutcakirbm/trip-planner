import React from 'react';

import Datepicker from '../../../components/Form/Datepicker';
import FormSelect from '../../../components/Form/Select';
import { SetFilters } from '../../../services/pages/trip-planner/hooks';
import { Filters } from '../../../services/pages/trip-planner/slice';
import styles from '../styles.module.scss';

export type FilterProps = {
  filters: Filters & {
    countryList: string[];
    availableDates: string[];
  };
  setFilters: (filter: SetFilters, value: string | number) => void;
};

const Filter: React.FC<FilterProps> = ({ filters, setFilters }: FilterProps) => {
  return (
    <>
      <div className={styles.plannerWrapper__filterCountry}>
        <FormSelect
          id='country-filter'
          label='Country'
          placeholder='Choose the country'
          value={filters.country}
          options={filters.countryList}
          onChange={(value) => setFilters('Country', value)}
        />
      </div>
      <div className={styles.plannerWrapper__filterCity}>
        <FormSelect
          id='city-filter'
          label='City'
          placeholder='Choose the city'
          value={filters.cityId}
          options={filters.cityList}
          onChange={(value) => setFilters('City', value)}
        />
      </div>
      <div className={styles.plannerWrapper__filterDate}>
        <Datepicker
          id='datepicker'
          label='Date'
          availableDates={filters.availableDates}
          selectedDate={filters.date}
          onSelect={(value) => setFilters('Date', value)}
        />
      </div>
    </>
  );
};

export default Filter;
