import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


function ViewOrder() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("https://order-pizza-api.herokuapp.com/api/orders")
            .then((results) => {
                results.json().then((data) => {
                    console.log("result", data)
                    setUserData(data)
                })
            })
    }, [])

    return (
        <>

            <div className="Table-div">
                <Table style={{ color: "white" }}>
                    <thead >
                        <tr>
                            <th>Order #</th>
                            <th>Crust</th>
                            <th>Flavor</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((data) => (
                            <tr>
                                <td>{data.Order_ID}</td>
                                <td>{data.Crust}</td>
                                <td>{data.Flavor}</td>
                                <td>{data.Size}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default ViewOrder;