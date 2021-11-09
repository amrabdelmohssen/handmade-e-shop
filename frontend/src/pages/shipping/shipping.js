import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/form/formContainer";
import { saveShippingAddress } from "../../actions/cartAction";
import CheckoutSteps from "../../components/checkoutSteps/checkoutSteps";
const Shipping = ({ history }) => {
    const cart = useSelector((state) => state.cartReducer);
    const { shippingAddress } = cart;
    const [shippingAddressOne, setShippingAddressOne] = useState(shippingAddress.shippingAddressOne);
    const [shippingAddressTwo, setShippingAddressTwo] = useState(shippingAddress.shippingAddressTwo);
    const [city, setCity] = useState(shippingAddress.city);
    const [country, setCountry] = useState(shippingAddress.country);
    const [phone, setPhone] = useState(shippingAddress.phone);

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ shippingAddressOne, shippingAddressTwo, city, country, phone }));
        history.push("/payment");
    };
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitForm}>
                <Form.Group controlId="shippingAddressOne">
                    <Form.Label>Shipping Address 1</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Shipping Address"
                        value={shippingAddressOne}
                        onChange={(e) => setShippingAddressOne(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="shippingAddressTwo">
                    <Form.Label>Shipping Address 2</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Shipping Address"
                        value={shippingAddressTwo}
                        onChange={(e) => setShippingAddressTwo(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button className="mt-3" type="submit" variant="primary">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Shipping;
