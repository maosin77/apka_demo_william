import styles from './SearchBox.module.css';

const SearchBox = () => {
  const services = [
    { key: 1, value: 'family', label: 'Prawo rodzinne' },
    { key: 2, value: 'compensation', label: 'Odszkodowania' },
    { key: 3, value: 'inheritance', label: 'Prawo spadkowe' },
    { key: 4, value: 'personalInterests', label: 'Dobra osobiste' },
  ];

  return (
    <form>
      <select name="services" form="services" className={styles.select}>
        {services.map(({ value, label, key }) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button className={styles.submitBtn} type="button">
        Szukaj
      </button>
    </form>
  );
};

export default SearchBox;
