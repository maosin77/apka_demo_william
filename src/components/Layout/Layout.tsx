import Topbar from 'components/Topbar/Topbar';
import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Topbar />
      {children}
      <div>cookies</div>
    </div>
  );
};

export default Layout;
