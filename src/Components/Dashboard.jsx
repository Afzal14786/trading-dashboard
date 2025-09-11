import { Route, Routes } from 'react-router-dom';

import DashboardSummary from "../Pages/Dashboard/DashboardSummary";
import Orders from "../Pages/Orders/Orders";
import HoldingAll from '../Pages/Holdings/HoldingAll';
import Positions from "../Pages/Positions/Positions";
import Funds from "../Pages/Funds/Funds";
import Profile from '../Pages/Profile/Profile';

import SubHoldingPage from "../Pages/Holdings/SubHoldingPage";
import HoldingsLayout from '../Pages/Holdings/HoldingsLayout';
import EquityPage from '../Pages/Holdings/EquityPage';

import OrdersLayout from '../Pages/Orders/OrdersLayout';
import BasketsPage from '../Pages/Orders/BasketsPage';
import GttPage from '../Pages/Orders/GttPage';
import AlertsPage from '../Pages/Orders/AlertsPage';
import SipPage from '../Pages/Orders/SipPage';

import PathNotFound from '../PathNotFound';
import UpdatePage from '../Pages/UpdatePage/UpdatePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import ResetPassword from '../Pages/ResetPage/ResetPassword';
import SetNewPassword from "../Pages/ResetPage/SetNewPassword";
import ForgotUserId from "../Pages/ResetPage/ForgotUserId";

import PrivateRoute from './PrivateRoute';

const Dashboard = () => {
  return (
    <Routes>
      
      {/* All the public router are here */}
      <Route path="*" element={<PathNotFound />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="forgot-userid" element={<ForgotUserId/>}/>
      <Route path="reset-password/:token" element={<SetNewPassword/>}/>

      <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardSummary />} />

          <Route path="/orders" element={<OrdersLayout />}>
            <Route index element={<Orders />} />
            <Route path="gtt" element={<GttPage />} />
            <Route path="baskets" element={<BasketsPage />} />
            <Route path="sip" element={<SipPage />} />
            <Route path="alerts" element={<AlertsPage />} />
          </Route>

          <Route path="/holdings" element={<HoldingsLayout />}>
            <Route index element={<HoldingAll />} />
            <Route path="all" element={<HoldingAll />} />
            <Route path="equity" element={<EquityPage />} />
            <Route path="mutualfund" element={<SubHoldingPage />} />
          </Route>

          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/edit-profile" element={<UpdatePage />} />
          <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;