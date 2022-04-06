import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Horros from './horros/horros';
import MainPage from './main';
import Paint from './paint/paint';
import TenNine from './tennine/tennine';

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/horro' element={<Horros />} />  
        <Route path='/paint' element={<Paint />} />
        <Route path='/tennine' element={<TenNine />} />
      </Routes>
  );
}

export default App;
