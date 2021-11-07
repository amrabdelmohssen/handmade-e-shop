import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/form/formContainer";
import CheckoutSteps from "../../components/checkoutSteps/checkoutSteps";
import { savePaymentMethod } from "../../actions/cartAction";
const Payment = ({ history }) => {
    const cart = useSelector((state) => state.cartReducer);
    const { shippingAddress } = cart;

    if (!shippingAddress) {
        history.push("/shipping");
    }
    const [PaymentMethod, setPaymentMethod] = useState("PayPal");

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(PaymentMethod));
        history.push("/placeorder");
    };
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label as="legend">Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type="radio"
                            label="PayPal or Credit Card"
                            id="PayPal"
                            name="paymentMethod"
                            value="PayPal"
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>

                        <Form.Check
                            type="radio"
                            label="Stripe"
                            id="Stripe"
                            name="paymentMethod"
                            value="Stripe"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                    </Col>
                </Form.Group>

                <Button className="mt-3" type="submit" variant="primary">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Payment;
