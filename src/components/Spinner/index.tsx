import React from 'react';

import styles from './styles.module.scss';

export type SpinnerProps = { className?: string };

const Spinner: React.FC<SpinnerProps> = ({ className = '' }: SpinnerProps) => {
  return (
    <div className={className}>
      <div className={styles.ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
