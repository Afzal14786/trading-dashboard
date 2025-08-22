import DashboardNavbar from "./DashboardNavbar"
import "./style.css"

const NeftyFiftyBar = () => {
  return (
    <>
      <div className='top-bar-container'>
          
          <nav className="nifty-container">
              <div className="nifty">
                <span className="index">NIFTY 50</span>
                <span className="index-points">{24619.35}</span>
                <span className="percent">131.95</span>
                <span className="percent">{(0.54)} </span>
              </div>

              <div className="sensex">
                <span className="index">SENSEX</span>
                <span className="index-points">{80539.91}</span>
                <span className="percent">24619</span>
                <span className="percent">{0.51}</span>
              </div>
          </nav>

          {/* dashboard navbar */}
          <DashboardNavbar/>
      </div>
    </>
  )
}

export default NeftyFiftyBar