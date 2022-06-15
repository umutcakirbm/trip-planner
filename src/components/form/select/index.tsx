import React, { ChangeEvent, useCallback, useMemo } from 'react';

import { ReactComponent as ArrowDownIcon } from '../../../images/icons/arrow-down.svg';
import FormItem from '../Item';

import styles from './styles.module.scss';

export type OptionsObject = { label: string; value: string | number };
export type OptionsObjectArray = Array<OptionsObject>;
export type OptionsStringArray = Array<string>;
export type FormSelectProps = {
  id: string;
  label: string;
  placeholder: string;
  value?: string | number;
  options: OptionsObjectArray | OptionsStringArray;
  onChange?: (value: string | number) => void;
};

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label = '',
  placeholder = '',
  value = '',
  options = [],
  onChange = () => null,
}: FormSelectProps) => {
  const {
    localOptions,
    valueType,
  }: {
    localOptions: OptionsObjectArray;
    valueType: string;
  } = useMemo(() => {
    let opts: OptionsObjectArray = [];
    let vType = 'string';
    if (options?.length) {
      if ((options[0] as OptionsObject).label) {
        opts = options as OptionsObjectArray;
        vType = typeof opts[0].value;
      } else {
        opts = (options as OptionsStringArray).map((opt) => ({ label: opt, value: opt }));
      }
    }
    return { localOptions: opts, valueType: vType };
  }, [options]);

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    let val: string | number = event.target?.value;
    if (valueType === 'number') {
      val = parseInt(val as string, 10);
    }
    onChange(val);
  }, [valueType]);

  const localValue = useMemo(() => {
    let val = '';
    if (localOptions?.find((option) => option.value === value)) {
      val = value?.toString();
    }
    return val;
  }, [value, localOptions]);

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
            {localOptions.map((opt) => (
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
