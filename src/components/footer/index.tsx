import React from 'react';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.wrapper} bg-footer py-32`}>
      <span className='text-primary-inverted fs-sm my-0'>
        &copy; 2014-2021 Tiqets Amsterdam
      </span>
    </footer>
  );
};

export default Footer;
