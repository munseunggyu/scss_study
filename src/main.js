import React from 'react';
import {Link} from 'react-router-dom';
import './main.scss';

function MainPage(){
  return(
    <div className='mainpage'>
      <ul>
        <li> <Link to="/horro"><button> Horro page </button> </Link> </li>
        <li> <Link to="/paint"><button> Paint page </button> </Link> </li>
        <li> <Link to='tennine'> <button> TenNine page </button> </Link> </li>
      </ul>
    </div>
  )
}

export default MainPage;