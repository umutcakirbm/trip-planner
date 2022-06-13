import React from 'react';

import { Days, DaysLabelMapping } from '../../../enums/days';

import styles from './datepicker.module.scss';

export type DatepickerButtonProps = {
  originalISOString: string;
  date: number;
  day: Days;
  isLastDayOfTheMonth: boolean;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: (isoString: string) => void;
};

const DatepickerButton: React.FC<DatepickerButtonProps> = ({
  originalISOString,
  date,
  day,
  isLastDayOfTheMonth,
  selected = false,
  disabled = false,
  onSelect = () => null,
}: DatepickerButtonProps) => {
  return (
    <div className={`${styles.buttonWrapper} ${isLastDayOfTheMonth && styles.buttonWrapper_lastDay}`}>
      <button
        className={`${styles.buttonWrapper__button} ${
          selected && styles.buttonWrapper__button_selected
        } ${disabled && styles.buttonWrapper__button_disabled} bg-primary`}
        type='button'
        onClick={() => onSelect(originalISOString)}
      >
        <div className='fs-sm ls-primary'>{DaysLabelMapping[day]}</div>
        <div className='fs-lg fw-500'>{date}</div>
      </button>
      {isLastDayOfTheMonth && (
        <div role="separator"
          className={`${styles.buttonWrapper__lastDayBorder} ${
            disabled && styles.buttonWrapper__lastDayBorder_disabled
          } ml-4`}
        ></div>
      )}
    </div>
  );
};

export default DatepickerButton;
