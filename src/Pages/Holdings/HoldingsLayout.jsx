import { Outlet } from 'react-router-dom';
import SubHeader from './SubHeader';
import "./style.css";

const HoldingsLayout = () => {
  return (
    <div className='summary'>
      {/* This SubHeader will always be visible */}
      <SubHeader />
      <Outlet />
    </div>
  );
}

export default HoldingsLayout;