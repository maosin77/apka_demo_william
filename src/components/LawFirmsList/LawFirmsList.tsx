import { db } from 'db';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import LawFirmItem from './LawFirmItem';
import styles from './LawFirmsList.module.css';

const LawFirmsList = () => {
  const lawFirmList = useLiveQuery(() => db.lawFirms.toArray());

  return (
    <div>
      {lawFirmList?.length === 0 && (
        <div className={styles.notFound}>
          <Link to="/addLawFirm">
            Niestety, nic nie znaleziono.. Dodaj swoją pierwszą kancelarię!
          </Link>
        </div>
      )}
      {lawFirmList?.map(({ name, description, location }) => (
        <LawFirmItem
          name={name}
          description={description}
          location={location}
        />
      ))}
    </div>
  );
};
export default LawFirmsList;
