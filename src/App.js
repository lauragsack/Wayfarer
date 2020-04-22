import React from 'react';
import Routes from './config/routes'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes />
      </div>
    </>
  );
}

export default App;
