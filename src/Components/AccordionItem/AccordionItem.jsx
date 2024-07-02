import React from 'react';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ header, children, isOpen, onToggle }) => {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <div
        className={styles.accordionHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onToggle();
          }
        }}
      >
        {header}
      </div>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

export default AccordionItem;
