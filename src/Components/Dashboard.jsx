import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'

import DashboardSummary from "../Pages/Dashboard/DashboardSummary"
import Orders from "../Pages/Orders/Orders"
import Holdings from "../Pages/Holdings/Holdings"
import Positions from "../Pages/Positions/Positions"
import Bids from "../Pages/Bids/Bids"
import Funds from "../Pages/Funds/Funds"

const Dashboard = () => {
  return (
    <>
        <div>
            <Sidebar/>
            <div>
                <Routes>
                    <Route element={<DashboardSummary/>} path='/'/>
                    <Route element={<Orders/>} path='/orders' />
                    <Route element={<Holdings/>} path='/holdings' />
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