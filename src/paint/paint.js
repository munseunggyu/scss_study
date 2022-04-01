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
          <div className='main__card'>
             <img src='https://cdn.pixabay.com/photo/2016/09/18/09/02/nail-polish-1677561__480.jpg' />
            <div className='main__card__text pink'>
              <span>NAIL GOOD</span>
              <p>Meet Like French, our deep burgundy polish that's as timeless as red lipstick. Statement-making as a solid color or with art, make it your signature red.</p>
              <button>DISCOVER NOW</button>
            </div>
          </div>
          <div className='main__card'>
             <img src='https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            <div className='main__card__text puple'>
              <span>GIFT CARDS</span>
              <p>Give the gift of the Paintbox experience for a manicure that tells a story.</p>
              <button>BUY A GIFT CARD</button>
            </div>
          </div>
          <div className='main__card'>
             <img src='https://images.unsplash.com/photo-1648587385042-b5e2d3965bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
            <div className='main__card__text blue'>
              <span>OUR STUDIO</span>
              <p>Book new nails at our Upper East Side studio.</p>
              <button>BOOK A MAINCURE</button>
            </div>
          </div>
        <div className='bottle__shop'>
          <h5>THE SHOP</h5>
          <h3>OUR Newest Polish</h3>
          <div className='bottles__item__container'>
            <div className='bottle__item__container'>
              <img src='https://images.unsplash.com/photo-1618354691490-0de58a2c4c93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzcxfHxib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
              <h5>BOTTLE IS GOOD</h5>
              <h3>LIKE FRENCH</h3>
              <span>$22.00</span>
              <button>ADD TO CART</button>
            </div>
            <div className='bottle__item__container'>
              <img src='https://images.unsplash.com/photo-1615485736894-a2d2e6d4cd9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
              <h5>CUP IS GOOD</h5>
              <h3>LIKE CANYON</h3>
              <span>$24.00</span>
              <button>ADD TO CART</button>
            </div>
            <div className='bottle__item__container'>
              <div>
              <img src='https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
              </div>
              <h5>BOTTLE IS GOOD</h5>
              <h3>LIKE VELET</h3>
              <span>$22.00</span>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Paint;