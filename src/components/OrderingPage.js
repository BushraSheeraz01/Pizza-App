import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";




function OrderingPage() {
    const history = useHistory();
return (
    <>
        <div className="order-buttons">
            <Button variant="secondary" onClick={() => history.push('./viewOrder')}>View Order</Button>
            <Button variant="secondary" onClick={() => history.push('./placeOrder')}>Place Order</Button>
            <Button variant="secondary" onClick={() => history.push('./cancelOrder')}>Cancel Order</Button>

        </div>
    </>
);
}

export default OrderingPage;