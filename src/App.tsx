import Layout from 'components/Layout/Layout';
import React from 'react';
import './styles/reset.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <section>content</section>
      </Layout>
    </div>
  );
};

export default App;
