import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Horros from './horros/horros';
import MainPage from './main';

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/horro' element={<Horros />} />  
      </Routes>
  );
}

export default App;
