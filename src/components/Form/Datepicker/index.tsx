import React, { useEffect, useState } from 'react';

import { ErrorsMapping } from '../../../enums/errors';
import FormItem from '../Item';

import DatepickerButton, { DatepickerButtonProps } from './DatepickerButton';
import styles from './styles.module.scss';
import { getDateRangeArray } from './utils';

export type DatepickerProps = {
  id: string;
  label: string;
  availableDates: Array<string>;
  selectedDate?: string;
  isDisabled?: boolean;
  isError?: boolean;
  onSelect?: (isoString: string) => void;
};

const Datepicker: React.FC<DatepickerProps> = ({
  id = '',
  label = '',
  availableDates = [],
  selectedDate,
  isDisabled = false,
  isError = false,
  onSelect = () => null,
}: DatepickerProps) => {
  const [dateRange, setDateRange] = useState([] as DatepickerButtonProps[]);

  useEffect(() => {
    const range = getDateRangeArray(availableDates?.[0], 7, availableDates, selectedDate);
    setDateRange(range);
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
              disabled={!isDisabled ? date.disabled : false}
            />
          ))}
        </div>
      </div>
      <>{isError && <span className='fs-sm'>{ErrorsMapping.FETCH_ERROR}</span>}</>
    </FormItem>
  );
};

export default Datepicker;
