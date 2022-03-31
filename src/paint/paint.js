import React from 'react';
import './scss/style.scss'
import {MdOutlineShoppingBag} from 'react-icons/md'
function Paint(){
  return(
    <div className='paint__container'>
      <header>
        <nav>
        <div className='nav__left'>
          <div>NAIL STUDIO</div>
          <div>SHOP PRODUCT</div>
        </div>
        <div className='nav__right'>
          <div>JOURNAL</div>
          <div> <MdOutlineShoppingBag /> </div>
        </div>
        </nav>
      </header>
      <main>
        <div className='main__container'>
          <div className='first__item'>
             <img src='https://cdn.pixabay.com/photo/2016/09/18/09/02/nail-polish-1677561__480.jpg' />
            <div className='first__item__text pink'>
              <span>NAIL GOOD</span>
              <p>Meet Like French, our deep burgundy polish that's as timeless as red lipstick. Statement-making as a solid color or with art, make it your signature red.</p>
              <button>DISCOVER NOW</button>
            </div>
          </div>
          <div className='first__item'>
             <img src='https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            <div className='first__item__text puple'>
              <span>GIFT CARDS</span>
              <p>Give the gift of the Paintbox experience for a manicure that tells a story.</p>
              <button>BUY A GIFT CARD</button>
            </div>
          </div>
          <div className='first__item'>
             <img src='https://images.unsplash.com/photo-1648587385042-b5e2d3965bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
            <div className='first__item__text blue'>
              <span>OUR STUDIO</span>
              <p>Book new nails at our Upper East Side studio.</p>
              <button>BOOK A MAINCURE</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Paint;