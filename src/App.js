import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import OrderingPage from './components/OrderingPage';
import HomePage from './components/HomePage';
import ViewOrder from './components/ViewOrder';
import PizzaBackground from './images/pizza1-bg.jpg';
import PlaceOrder from './components/PlaceOrder';
import CancelOrder from './components/CancelOrder';
// import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <div className="App"
        style={{
          backgroundImage: "url(" + PizzaBackground + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        {/* <HomePage /> */}


        < Router >
          <div>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">Pizza App</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="./HomePage">Home</Nav.Link>
                  <Nav.Link as={Link} to="./orderingPage">Place Order</Nav.Link>
                  <Nav.Link as={Link} to="./viewOrder">View</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>

          <Switch>
            <Route path="/homePage">
              <HomePage />
            </Route>
            <Route exact path="/orderingPage">
              <OrderingPage />
            </Route>
            <Route exact path="/viewOrder">
              <ViewOrder />
            </Route>
            <Route exact path="/placeOrder">
              <PlaceOrder />
            </Route>
            <Route exact path="/cancelOrder">
              <CancelOrder />
            </Route>
          </Switch>
        </Router >

      </div>
    </>
  );
}

export default App;
