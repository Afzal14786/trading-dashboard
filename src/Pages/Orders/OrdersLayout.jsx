import { Outlet } from 'react-router-dom';
import OrderSubHeader from './OrderSubHeader';

const OrdersLayout = () => {

    return (
        <div className="summary order_home">
            <OrderSubHeader/>

            <Outlet/>
        </div>
    );
}

export default OrdersLayout