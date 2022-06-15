import React, { useRef } from 'react';

import Datepicker from '../../../components/Form/Datepicker';
import FormSelect from '../../../components/Form/Select';
import { useAffix } from '../../../hooks/useAffix';
import { SetFilters } from '../../../services/pages/trip-planner/hooks';
import { Filters, FiltersDisability } from '../../../services/pages/trip-planner/slice';
import styles from '../styles.module.scss';

export type FilterProps = {
  filters: Filters & {
    countryList: string[];
    availableDates: string[];
  };
  setFilters: (filter: SetFilters, value: string | number) => void;
  isDisabled: FiltersDisability;
  isPending: boolean;
};

const Filter: React.FC<FilterProps> = ({ filters, setFilters, isDisabled, isPending }: FilterProps) => {
  const filterRef = useRef<HTMLDivElement>(null);
  useAffix(filterRef, styles.plannerWrapper_affix);

  return (
    <div ref={filterRef} className={styles.plannerWrapper__filter}>
      <div className={styles.plannerWrapper__filterCountry}>
        <FormSelect
          id='country-filter'
          label='Country'
          placeholder='Choose the country'
          value={filters.country}
          options={filters.countryList}
          onChange={(value) => setFilters('Country', value)}
          isPending={isPending}
        />
      </div>
      <div
        className={`${styles.plannerWrapper__filterCity} ${
          isDisabled.city && styles.plannerWrapper_disabled
        }`}
      >
        <FormSelect
          id='city-filter'
          label='City'
          placeholder='Choose the city'
          value={filters.cityId}
          options={filters.cityList}
          onChange={(value) => setFilters('City', value)}
          isPending={isPending}
        />
      </div>
      <div
        className={`${styles.plannerWrapper__filterDate} ${
          isDisabled.date && styles.plannerWrapper_disabled
        }`}
      >
        <Datepicker
          id='datepicker'
          label='Date'
          availableDates={filters.availableDates}
          selectedDate={filters.date}
          onSelect={(value) => setFilters('Date', value)}
        />
      </div>
    </div>
  );
};

export default Filter;
