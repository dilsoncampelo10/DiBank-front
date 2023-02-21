

import './App.css';

import { Layout } from './components/layouts/Layout';
import { ButtonPrimary } from './components/Login/Button';



function App() {
  return (
    <>
      <Layout>
          <ButtonPrimary content='Login'/>
      </Layout>
    </>
  );
}

export default App;
