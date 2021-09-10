import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PizzaVeg from '../images/pizza1.jpg';
import PizzaIt from '../images/pizza3.jpg';
import PizzaOnion from '../images/pizza4.jpg';



// import pizza from '../images/pizza-logo.jpg';
// import OrderingPage from './OrderingPage';
// import Main from './Main.js';



function HomePage() {
    const history = useHistory();

    // function handleClick(routeName) {
    //     // console.log("Hello")
    //     history.push('./orderingPage');

    // }
    return (
        <>
            <div className="home">
                <div className="SpectaclePizza">
                    <div className="inside">
                        <h1>Spectacle Pizza</h1>
                        <p >We offer an amazing variety of delicious pizza in town.</p>
                    </div>
                </div>
                <div className="ItalianPizza">
                    <div className="inside-italian">
                        <h1>The real Italian Flavour</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="italian-img">
                    </div>
                </div>
                <div className="Flavors">
                    <div className="Flavor-heading">
                        <h1>Our Flavours</h1>
                    </div>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src={PizzaOnion} roundedCircle />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={PizzaVeg} roundedCircle />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={PizzaIt} roundedCircle />
                            </Col>

                        </Row>
                    </Container>
                </div>
                <div className="Order-div">
                    <h1>Order Now</h1>
                    <div className="button-div">
                        <Button variant="dark" onClick={() => history.push('./orderingPage')}>Click here to Place order</Button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default HomePage;