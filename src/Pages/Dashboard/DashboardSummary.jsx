import React from 'react'
import "./style.css"
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const DashboardSummary = () => {
  return (
    <>
      <div className='summaryPage summary'>
          <div className="user__name">
              Hi, Md Afzal Ansari
          </div>

        {/* equity and commodity information cards */}
        <div className="cards__container">
            {/* Equity Card */}
            <div className="card">
                <div className="card__header">
                  <PieChartOutlineIcon className='chart__icon'/> Equity
                </div>
                <div className="card__body">
                  <div className="card__left">
                    <div className='title'>0</div>
                    <div className="lable">Margin available</div>
                  </div>
                  <div className="card__right">
                    <div className="block">
                      <span>Margin Used</span>
                      <span>0</span>
                    </div>
                    <div className="block">
                      <span>Opening balance</span>
                      <span>0</span>
                    </div>
                    <a href="#" className='view__statement'>View Statement</a>
                  </div>
                </div>
            </div>

            {/* Commodity Card */}
            <div className="card">
                <div className="card__header">
                  <WaterDropIcon className='chart__icon'/> Commodity
                </div>
                <div className="card__body">
                  <div className="card__left">
                      <div className='title'>0</div>
                      <div className="lable">Margin available</div>
                  </div>
                  <div className="card__right">
                    <div className="block">
                      <span>Margin Used</span>
                      <span>0</span>
                    </div>
                    <div className="block">
                      <span>Opening balance</span>
                      <span>0</span>
                    </div>
                    <a href="#" className='view__statement'>View Statement</a>
                  </div>
                </div>
            </div>
        </div>

        <div className="horizontale__line"></div>
      </div>
    </>
  )
}

export default DashboardSummary