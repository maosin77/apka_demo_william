const SearchBox = () => {
  const services = [
    { value: 'family', label: 'Prawo rodzinne' },
    { value: 'compensation', label: 'Odszkodowania' },
    { value: 'inheritance', label: 'Prawo spadkowe' },
    { value: 'personalInterests', label: 'Dobra osobiste' },
  ];
  return (
    <form>
      <label>Rodzaj usługi:</label>
      <select name="services" form="services">
        {services.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      <button type="button">Szukaj</button>
    </form>
  );
};

export default SearchBox;
