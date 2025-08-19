import React from 'react'
import "./style.css"

const Orders = () => {
  return (
    <>
      <div className='empty_state'>
        <div>
          <div className="description">
            <img src="/images/orderbook.svg" alt="order Book" className='image' />
            <div className='desc_div'>
              <p>You haven't placed any orders today</p>
            </div>
          </div>

          <div className="empty_btn">
            <button className='btn1'>Get Started</button>
            <a href="#" className='view__history'>View History</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders