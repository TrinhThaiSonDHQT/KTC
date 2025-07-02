import React from 'react';
import styles from './DefaultButton.module.css';

type propsDefaultButton = {
  children: React.ReactNode;
  background: string;
  outline?: boolean;
};

const DefaultButton = ({
  background,
  children,
  outline,
}: propsDefaultButton) => {
  return (
    <div
      className={`${styles.DefaultButton} ${styles[background]} ${
        outline ? styles.outline : ''
      }`}
    >
      {children}
    </div>
  );
};

export default DefaultButton;
