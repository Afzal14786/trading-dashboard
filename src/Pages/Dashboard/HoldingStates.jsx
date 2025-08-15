import React from 'react'
import "./style.css"


const HoldingStates = () => {
  return (
    <>
        <div className="holding_portfolio">
            <div className='HoldingS__info common'>
                <div className="empty__state">
                    {/* there should be an image  */}
                    <img src="/images/holdings__bag__images.svg" alt="holdings__bag__images" className='holding_image'/>
                    <div className="holding__description">
                        <p>You don't have any stocks in your DEMAT yet. Get started with absolutely free equity investments.</p>
                    </div>
                    <button className='investing__btn'>Start Investing</button>
                </div>
            </div>

            <div className="empty__div common"></div>
        </div>

        <div className='horizontale__line'></div>
    </>
  );
}

export default HoldingStates