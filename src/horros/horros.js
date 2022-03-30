import React from "react";
import './scss/style.scss';

function Horros(){
  return(
    <div className="horroPageBlock">
      <div className="left__part">
        <h1>BEST HORRO SCENES</h1>
        <h3>
           An ever growing collection <br /> featuring some of the best <br /> scenes in horror.
        </h3>
        <p>
        “Best Horror Scenes” is a collection of scenes I feel are some of the most affecting in horror. Some may be simple black cat scares, others may be more subdued or nuanced. Many come from films that aren't necessarily “horror” but have elements or threads of horror.
        </p>
        <ul className="url__list">
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">SuggestaScene</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">RSS</a></li>
          <li><a href="#">Letterboxd</a></li>
        </ul>
      </div>
      <div className="right__part">

      </div>
    </div>
  )
}

export default Horros;