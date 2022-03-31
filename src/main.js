import React from 'react';
import {Link} from 'react-router-dom';
import './main.scss';

function MainPage(){
  return(
    <div>
      <ul>
        <li> <Link to="/horro"><button> Horro page </button> </Link> </li>
        <li> <Link to="/horro"><button> Paint page </button> </Link> </li>
      </ul>
    </div>
  )
}

export default MainPage;