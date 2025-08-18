

const Positions = () => {
  return (
    <>
      <div className='summary'>
        <div className="order__status">
          <div className="desc">
            <img src="/images/positions.svg" alt="order Book" className='order__book__img' />
            <div className='desc_div'>
              <p>You don't have any positions yet</p>
            </div>
          </div>

          <div className="btn">
            <button className='get__started__btn'>Get Started</button>
            <a href="#" className='view__history'>Analytics</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Positions