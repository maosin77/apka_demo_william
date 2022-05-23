import CookiesBar from 'components/CookiesBar/CookiesBar';
import Topbar from 'components/Topbar/Topbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Topbar />
      {children}
      <CookiesBar />
    </div>
  );
};

export default Layout;
