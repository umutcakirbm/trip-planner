import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { ReactComponent as ArrowDownIcon } from '../../images/icons/arrow-down.svg';

import styles from './select-filter.module.scss';

export type SelectFilterProps = {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  onChange?: (value: string) => void;
};

const SelectFilter: React.FC<SelectFilterProps> = ({
  id,
  label = '',
  placeholder = '',
  value = '',
  options = [],
  onChange = () => null,
}: SelectFilterProps) => {
  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target?.value);
  }, []);

  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    if (options?.find((option) => option.value === value)) {
      setLocalValue(value);
    } else {
      setLocalValue('');
    }
  }, [value, options]);

  return (
    <div className={styles.wrapper}>
      <label className={`${styles.wrapper__label} mb-8 fs-sm`} htmlFor={id}>
        {label}
      </label>
      <div className={styles.selectWrapper}>
        <select
          id={id}
          className={`${styles.selectWrapper__select} py-16 pl-12 pr-48 fw-500`}
          value={localValue}
          onChange={handleChange}
        >
          <option value='' disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ArrowDownIcon className={styles.selectWrapper__icon} />
      </div>
    </div>
  );
};

export default SelectFilter;
