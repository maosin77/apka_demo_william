import Layout from 'components/Layout/Layout';
import React from 'react';
import Router from './router';
import './styles/reset.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
