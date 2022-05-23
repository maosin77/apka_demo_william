import { db } from 'db';
import { useLiveQuery } from 'dexie-react-hooks';
import LawFirmItem from './LawFirmItem';

const LawFirmsList = () => {
  const lawFirmList = useLiveQuery(() => db.lawFirms.toArray());

  return (
    <div>
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
