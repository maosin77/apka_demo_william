import React from 'react';
import styles from './LawFirmItem.module.css';

interface LawFirmItemProps {
  name: string;
  description: string;
  location: string;
}

const LawFirmItem: React.FC<LawFirmItemProps> = ({
  name,
  description,
  location,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.location}>{location}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LawFirmItem;
