import React, { useEffect, useState } from 'react';

import FormItem from '../item';

import DatepickerButton, { DatepickerButtonProps } from './datepicker-button';
import styles from './datepicker.module.scss';
import { getDateRangeArray } from './utils';

export type DatepickerProps = {
  id: string;
  label: string;
  availableDates: Array<string>;
  selectedDate?: string;
  onSelect?: (isoString: string) => void;
};

const Datepicker: React.FC<DatepickerProps> = ({
  id = '',
  label = '',
  availableDates = [],
  selectedDate,
  onSelect = () => null,
}: DatepickerProps) => {
  const [dateRange, setDateRange] = useState([] as DatepickerButtonProps[]);

  useEffect(() => {
    if (availableDates?.length) {
      const range = getDateRangeArray(availableDates[0], 7, availableDates, selectedDate);
      setDateRange(range);
    }
  }, [availableDates, selectedDate]);

  return (
    <FormItem id={id} label={label}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__slider}>
          {dateRange.map((date) => (
            <DatepickerButton
              key={`${date.date}${date.day}`}
              {...date}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </FormItem>
  );
};

export default Datepicker;
