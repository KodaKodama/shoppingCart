import React, { useState } from 'react'
import '../styles/Cart.css'

function Cart({cart, setCart}) {
    const [price, setPrice] = useState(0);
  return (
    <div className='cart'>
        {cart?.map((item) => (
                <div className="cart_box" key={item.id}>
                <div className="cart_img">
                <img src={item.img} alt="image" />
                <p>{item.title}</p>
                </div>
                <div className='add_remove'>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div>
                    <span>Rs {item.price}</span>
                    <button>Remove</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cart