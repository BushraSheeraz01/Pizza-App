import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
                padding: '30px 20px',
                width: 'auto',
                height: '-webkit-fill-available'
            }}>{orders.map((v, i) => {
                return <div key={i} style={{ color: "white", margin: "20px", }}>
                    {/* <div>Crust:  {v.Crust}</div>
                            <div>Flavor: {v.Flavor}</div>
                            <div>Size:   {v.Size}</div>
                            
                            <br />
                            <br /> */}
                    <Card border="dark" style={{ width: '18rem', backgroundColor: "#c1bebe54", textShadow: "2px 2px #212529" }}>
                        <Card.Body>
                            <Card.Text>Crust: {v.Crust}</Card.Text>
                            <Card.Text>Flavor: {v.Flavor}</Card.Text>
                            <Card.Text>Size: {v.Size}</Card.Text>
                            <Button variant="dark" onClick={() => onClickCancel(v.Order_ID)}>Cancel Order</Button>
                        </Card.Body>
                    </Card>
                </div>

            })}


                <br />
                ));
            </div>
        </>
    );
}

export default CancelOrder;