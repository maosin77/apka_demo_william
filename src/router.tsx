import AddLawFirmPage from 'pages/addLawFirm';
import LawFirmAdded from 'pages/lawFirmAdded';
import LoginPage from 'pages/login';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/addLawFirm" element={<AddLawFirmPage />} />
      <Route path="/lawFirmAdded" element={<LawFirmAdded />} />
    </Routes>
  );
};

export default Router;
