import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/form/formContainer";
import { saveShippingAddress } from "../../actions/cartAction";
import CheckoutSteps from "../../components/checkoutSteps/checkoutSteps";
const Shipping = ({ history }) => {
    const cart = useSelector((state) => state.cartReducer);
    const { shippingAddress } = cart;
    const [street, setStreet] = useState(shippingAddress.street);
    const [apartment, setApartment] = useState(shippingAddress.Appartment);
    const [city, setCity] = useState(shippingAddress.city);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ street, apartment, city, country }));
        history.push("/payment");
    };
    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={submitForm}>
                <Form.Group controlId="street">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="apartment">
                    <Form.Label>Apartment</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Apartment"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
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

                <Button className="mt-3" type="submit" variant="primary">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Shipping;
