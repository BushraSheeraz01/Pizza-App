import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';



function CancelOrder() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
            .then(response => response.json())
            .then(data => setOrders(data))
    },
        []);

    const onClickCancel = (Order_ID) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
            .then(response => {
                if (response.status == 200) {
                    alert('Cancelled successfully')
                }
                window.location.reload();
            })
    }

    return (
        <>
            <div style={{
                display: "flex",
                padding: '30px 20px',
                width: 'auto',
                height: '-webkit-fill-available'
            }}>{orders.map((v, i) => {
                return <div key={i} style={{backgroundColor: "#c1bebea1", color: "white", padding: "10px 20px", width: "max-content"}}>
                    <div>Crust = {v.Crust}</div>
                    <div>Flavor = {v.Flavor}</div>
                    <div>Size ={v.Size}</div>
                    <Button variant="secondary" onClick = {() => onClickCancel=(v.Order_ID)}>Cancel Order</Button>
                    <br />
                    <br />
                </div>
            })}
            </div>
        </>
    );
}

export default CancelOrder;