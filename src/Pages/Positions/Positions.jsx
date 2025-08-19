

const Positions = () => {
  return (
    <>
      <div className='summary'>
        <div className="empty_state">
          <div className="description">
            <img src="/images/positions.svg" alt="order Book" className='image' />
            <div className='desc_div'>
              <p>You don't have any positions yet</p>
            </div>
          </div>

          <div className="empty_btn">
            <button className='btn1'>Get Started</button>
            <a href="#" className='view__history'>Analytics</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Positions