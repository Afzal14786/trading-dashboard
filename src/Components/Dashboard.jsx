import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'

import DashboardSummary from "../Pages/Dashboard/DashboardSummary"
import Orders from "../Pages/Orders/Orders"
import HoldingAll from '../Pages/Holdings/HoldingAll'
import Positions from "../Pages/Positions/Positions"
import Bids from "../Pages/Bids/Bids"
import Funds from "../Pages/Funds/Funds"

import SubHoldingPage from "../Pages/Holdings/SubHoldingPage"
import HoldingsLayout from '../Pages/Holdings/HoldingsLayout'
import EquityPage from '../Pages/Holdings/EquityPage'


import OrdersLayout from '../Pages/Orders/OrdersLayout'
import BasketsPage from '../Pages/Orders/BasketsPage'
import GttPage from '../Pages/Orders/GttPage'
import AlertsPage from '../Pages/Orders/AlertsPage'
import SipPage from '../Pages/Orders/SipPage'

const Dashboard = () => {
  return (
    <>
        <div>
            <Sidebar/>
            <div>
                <Routes>
                    <Route element={<DashboardSummary/>} path='/'/>
                    <Route element={<OrdersLayout/>} path='/orders'>
                        <Route index element={<Orders/>} path='/orders'/>
                        <Route element={<GttPage/>} path='/orders/gtt'/>
                        <Route element={<BasketsPage/>} path='/orders/baskets'/>
                        <Route element={<SipPage/>} path='/orders/sip'/>
                        <Route element={<AlertsPage/>} path='/orders/alerts'/>
                    </Route>

                    <Route element={<HoldingsLayout/>} path='/holdings'>
                      <Route index element={<HoldingAll />} path='/holdings'/>
                      <Route element={<HoldingAll />} path="/holdings/all"/>
                      <Route element={<EquityPage />} path="/holdings/equity"/>
                      <Route element={<SubHoldingPage/>} path='/holdings/mutualfund'/>
                    </Route>
                    <Route element={<Positions/>} path='/positions' />
                    <Route element={<Bids/>} path='/bids' />
                    <Route element={<Funds/>} path='/funds' />
                </Routes>
            </div>
        </div>
    </>
  );
}

export default Dashboard