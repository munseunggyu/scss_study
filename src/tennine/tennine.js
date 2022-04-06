import React from 'react';
import './scss/style.scss';

function TenNine(){
  return(
    <div className='tenNine__container'>
      <span></span>
      <span></span>
      <span class="menu">Menu</span>
      <div class="number__row">
        <div class="number">#10</div>
        <div class="number">#9</div>
        <div class="number">#8</div>
        <div class="number">#7</div>
        <div class="number">#6</div>
      </div>
      <div class="center-image"></div>
      <div class="number__row">
        <div class="number">#5</div>
        <div class="number">#4</div>
        <div class="number">#3</div>
        <div class="number">#2</div>
        <div class="number">#1</div>
      </div>
      <span></span>
      <div class="scrolling__text">
        <span
          >This is a very long text that should scroll using CSS3 Animations and
          not JS</span
        >
      </div>
      <span></span>
    </div>
  )
}

export default TenNine;