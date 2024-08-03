import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/Navbar.css'

function Navbar({size, setShow}) {
  return (
    <nav>
      <div className="nav_box">
        <span className='my_shop'>
          My shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className='fa-solid fa-cart-shopping'></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar