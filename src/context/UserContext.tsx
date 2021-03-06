import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContextValue {
  isLogged: boolean;
  logout: () => void;
  login: () => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<ContextValue>({} as ContextValue);

const UserProvider = ({ children }: UserProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLogged(true);
    navigate('/', { replace: true });
  };

  const logout = () => {
    setIsLogged(false);
    navigate('/login', { replace: true });
  };

  return (
    <UserContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export const useUser = () => useContext(UserContext);
