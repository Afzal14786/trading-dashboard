import React from "react"
import { NavLink } from "react-router-dom"; 

const OrderSubHeader = ()=> {
    return (
        <div className="order_subheader">
            <nav className="order_nav">
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <NavLink
                            className='links'
                            to={'/'}
                        >
                            Orders
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/'}
                        >
                            GTT
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/'}
                        >
                            Baskets
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/'}
                        >
                            SIP
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/'}
                        >
                            Alerts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default OrderSubHeader