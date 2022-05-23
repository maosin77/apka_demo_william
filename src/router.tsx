import { useUser } from 'context/UserContext';
import AddLawFirmPage from 'pages/addLawFirm';
import LawFirmAdded from 'pages/lawFirmAdded';
import LawFirmsListPage from 'pages/lawFirms';
import LoginPage from 'pages/login';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const PrivateRoute = () => {
  const { isLogged } = useUser();

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LawFirmsListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/addLawFirm" element={<PrivateRoute />}>
        <Route path="/addLawFirm" element={<AddLawFirmPage />} />
      </Route>
      <Route path="/lawFirmAdded" element={<LawFirmAdded />} />
    </Routes>
  );
};

export default Router;
