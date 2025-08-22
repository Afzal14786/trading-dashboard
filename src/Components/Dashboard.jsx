import { Route, Routes } from 'react-router-dom'

import DashboardSummary from "../Pages/Dashboard/DashboardSummary"
import Orders from "../Pages/Orders/Orders"
import HoldingAll from '../Pages/Holdings/HoldingAll'
import Positions from "../Pages/Positions/Positions"
import Funds from "../Pages/Funds/Funds"
import Profile from '../Pages/Profile/Profile'

import SubHoldingPage from "../Pages/Holdings/SubHoldingPage"
import HoldingsLayout from '../Pages/Holdings/HoldingsLayout'
import EquityPage from '../Pages/Holdings/EquityPage'

import OrdersLayout from '../Pages/Orders/OrdersLayout'
import BasketsPage from '../Pages/Orders/BasketsPage'
import GttPage from '../Pages/Orders/GttPage'
import AlertsPage from '../Pages/Orders/AlertsPage'
import SipPage from '../Pages/Orders/SipPage'

import MainLayout from './MainLayout'
import PathNotFound from '../PathNotFound'
import UpdatePage from '../Pages/UpdatePage/UpdatePage'
import LoginPage from '../Pages/LoginPage/LoginPage'

const Dashboard = () => {
  return (
    <Routes>
      {/* Routes WITH sidebar + navbar */}
      <Route element={<MainLayout />}>
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Catch-all route WITHOUT layout */}
      <Route path="*" element={<PathNotFound />} />
    </Routes>
  );
}

export default Dashboard
