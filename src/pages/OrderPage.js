import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Paypal from '../components/PayPal'

const OrderPage = props => {
  const [validated, setValidated] = useState(false);
  console.log(props);
  const totalPrice = props.data.items.reduce((acc, curVal) => {
    const price = Number(curVal.price);
    const itemTotalPrice = price * curVal.quantity;
    return acc + itemTotalPrice;
  }, 0);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="order-page">
      <div className="container">
        <section className="section-left">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="1234 Main St" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid adress.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group controlId="formGrouptel">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone" required />
            </Form.Group>
            <Form.Group>
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            />
            </Form.Group>
            <Paypal />
            <Button type="submit" className="btn btn-primary button">
              Submit form
            </Button>
          </Form>
          </section>
          <section className="section-right">
          <div id="border"></div>
          <h5>Subtotal: £{totalPrice.toFixed(2)}</h5>
          <h5>Shipping(Standart): Free</h5>
          <h1>Order Total: £{totalPrice.toFixed(2)}</h1>
          </section>
          </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.cart
  };
};

export default connect(mapStateToProps)(OrderPage);
