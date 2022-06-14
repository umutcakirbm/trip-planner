import React, { ReactElement } from 'react';

import styles from './styles.module.scss';

export type FormItemProps = { id: string; label: string; children: ReactElement };

const FormItem: React.FC<FormItemProps> = ({ id = '', label = '', children }: FormItemProps) => {
  return (
    <div>
      <label className={`${styles.label} mb-8 fs-sm ls-primary`} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormItem;
