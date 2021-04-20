import React from 'react';
import Login from './pages/Login';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
