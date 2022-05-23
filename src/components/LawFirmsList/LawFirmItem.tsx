import styles from './LawFirmItem.module.css';

const LawFirmItem: any = ({ name, description, location }: any) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.location}>{location}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LawFirmItem;
