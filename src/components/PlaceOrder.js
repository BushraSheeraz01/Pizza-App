import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function PlaceOrder() {
    // const arr = [
    //     {
    //         "Crust": "NORMAL",
    //         "Flavor": "BEEF-NORMAL",
    //         "Size": "SMALL",

    //     }
    // ]

    const [crust, setCrust] = useState('');
    const [flavor, setFlavor] = useState('');
    const [size, setSize] = useState('');
    

    const handleSelect = (event) => {
        setCrust(event.target.value);
        setSize(event.target.value);
        // console.log(crust);
    }
    const handleFlavorSelect = (event) => {
        setFlavor(event.target.value);

    }
    const handleSizeSelect = (event) => {
        setSize(event.target.value);

    }
    function handleSubmit() {
        console.log(crust, flavor, size);
        if (crust == "" || flavor == "" || size == "") {
            alert('please select appropriate options')
        }
        else {
            let pizza= {
                "Flavor": flavor,
                "Crust": crust,
                "Size": size,
                "Table_No": 0,
            }
            let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzEyODkxNTUsIm5iZiI6MTYzMTI4OTE1NSwianRpIjoiMjdkMDU3MzAtMjc4ZS00MjUyLTg3MTAtOTg5OWMwMDc0YmI0IiwiZXhwIjoxNjMxMjkwMDU1LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ._V8hdkhDtno8uqj9KE97ZWaSElUxJbGJN8qqKJJUvDE";

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(pizza)
            };

            fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
                .then(response => {
                    if (response.status == 201) {
                        alert('Your Order is sucessfully Submitted!')
                        console.log("abc")
                    }
                })
        }
    }

    return (
        <>
            <div className="Form-div">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Crust</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue={crust} onChange={handleSelect}>
                            <option >select menu</option>
                            <option value="Normal">Normal</option>
                            <option value="Thin">Thin</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Flavor</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue={flavor} onChange={handleFlavorSelect}>
                            <option>select menu</option>
                            <option value="BEEF-NORMAL">BEEF-NORMAL</option>
                            <option value="CHEESE">CHEESE</option>
                            <option value="CHICKEN FAJITA">CHICKEN FAJITA</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Size</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue={size} onChange={handleSizeSelect}>
                            <option>select menu</option>
                            <option value="SMALL">SMALL</option>
                            <option value="MEDIUM">MEDIUM</option>
                            <option value="LARGE">LARGE</option>
                        </Form.Select>
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="dark" onClick={handleSubmit}> Place Order</Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default PlaceOrder;
