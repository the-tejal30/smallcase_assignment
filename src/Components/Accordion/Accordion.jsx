import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ mode, defaultOpen, children }) => {
  const [openIndices, setOpenIndices] = useState(() => {
    if (mode === 'allOpen') {
      return new Set([...Array(children.length).keys()]);
    } else {
      return defaultOpen ? new Set(defaultOpen) : new Set();
    }
  });

  const handleToggle = (index) => {
    if (mode === 'allOpen') {
      return;
    }

    const newOpenIndices = new Set(openIndices);

    if (mode === 'oneOpen') {
      newOpenIndices.clear();
      newOpenIndices.add(index);
    } else if (mode === 'multipleOpen') {
      if (newOpenIndices.has(index)) {
        newOpenIndices.delete(index);
      } else {
        newOpenIndices.add(index);
      }
    }

    setOpenIndices(newOpenIndices);
  };

  return (
    <div className={styles.accordion}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndices.has(index),
          onToggle: () => handleToggle(index),
        })
      )}
    </div>
  );
};

export default Accordion;
