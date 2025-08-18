import { NavLink } from "react-router-dom"; 

import "./style.css"
const OrderSubHeader = ()=> {
    return (
        <div className="order_subheader">
            <nav className="order_nav holding__nav">
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <NavLink
                            className='links'
                            to={'/orders'}
                        >
                            Orders
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/orders/gtt'}
                        >
                            GTT
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/orders/baskets'}
                        >
                            Baskets
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/orders/sip'}
                        >
                            SIP
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='links'
                            to={'/orders/alerts'}
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