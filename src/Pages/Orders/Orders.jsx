import React from 'react'
import "./style.css"

const Orders = () => {
  return (
    <>
      <div className='summary order__book'>
        <div className="order__status">
          <div className="desc">
            <img src="/images/orderbook.svg" alt="order Book" className='order__book__img' />
            <p className='desc__text'>You haven't placed any orders today</p>
          </div>

          <div className="btn">
            <button className='get__started__btn'>Get Started</button>
            <a href="#" className='view__history'>View History</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders