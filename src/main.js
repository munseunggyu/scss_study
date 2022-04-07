import React from 'react';
import {Link} from 'react-router-dom';
import './main.scss';
import horroImg from './horroImg.png'
import paintImg from './paintThumbnail.png';
import zooImg from './zooThumbnail.png';
import tennineImg from './tennineThumbnail.png';


function MainPage(){
  return(
    <div className='mainpage'>
      <ul>
        <li> 
          <Link to="/horro" className='link'>
            <img  src={horroImg} />
            <button> Horro page </button>
           </Link> 
        </li>
        <li> 
          <Link to="/paint" className='link'>
            <img  src={paintImg} />
            <button>Paint page </button>
           </Link> 
        </li><li> 
          <Link to="/zoo" className='link'>
            <img  src={zooImg} />
            <button>Z.O.O page </button>
           </Link> 
        </li><li> 
          <Link to="/tennine" className='link'>
            <img  src={tennineImg} />
            <button>TenNine page </button>
           </Link> 
        </li>
      </ul>
    </div>
  )
}

export default MainPage;