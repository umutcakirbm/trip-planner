import React from 'react';

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={`${styles.wrapper} px-16 py-64`}>
      <div className={`${styles.wrapper__overlay} bg-header`}></div>
      <h1 className={`${styles.wrapper__heading} text-primary-inverted fs-xl my-0`}>
        Plan your trip!
      </h1>
    </header>
  );
};

export default Header;
