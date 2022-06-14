import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { ReactComponent as ArrowDownIcon } from '../../../images/icons/arrow-down.svg';
import FormItem from '../Item';

import styles from './styles.module.scss';

export type FormSelectProps = {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  onChange?: (value: string) => void;
};

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label = '',
  placeholder = '',
  value = '',
  options = [],
  onChange = () => null,
}: FormSelectProps) => {
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
      <FormItem id={id} label={label}>
        <div className={styles.selectWrapper}>
          <select
            id={id}
            className={`${styles.selectWrapper__select} py-16 pl-12 pr-48 fw-500`}
            value={localValue}
            onChange={handleChange}
            name={id}
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
      </FormItem>
    </div>
  );
};

export default FormSelect;
