import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/message/message";
import Loader from "../../components/loader/loader";
import { getUserDetails, updateUserProfile } from "../../actions/userAction";
import { listMyOrders } from "../../actions/orderAction";
import { LinkContainer } from "react-router-bootstrap";
const Profile = ({ history, location }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetailsReducer);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLogin;

    const userUpadateProfile = useSelector((state) => state.userUpdateProfileReducer);
    const { success } = userUpadateProfile;

    const orderMyList = useSelector((state) => state.orderListMyReducer);
    const { loading: loadingOrders, error: errorOrders, orders } = orderMyList;

    useEffect(() => {
        if (userInfo.length === 0) {
            history.push("/login");
        } else {
            if (!user.name) {
                dispatch(getUserDetails());
                dispatch(listMyOrders());
            } else {
                setName(user.name);
                setEmail(user.email);
                setStreet(user.street);
                setApartment(user.apartment);
                setCity(user.city);
            }
        }
    }, [dispatch, history, userInfo, user]);

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(
            updateUserProfile({
                _id: user.id,
                name,
                email,
                street,
                apartment,
                city,
            })
        );
    };
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <h2>User Profile</h2>
                    {error && <Message variant="danger">{error}</Message>}
                    {success && <Message variant="success">Profile Updated</Message>}
                    {loading && <Loader />}
                    <Form onSubmit={submitForm}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="street">
                            <Form.Label>Street</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Street Name"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="apartment">
                            <Form.Label>Apartment</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Apartment No."
                                value={apartment}
                                onChange={(e) => setApartment(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary" className="mt-3">
                            Update
                        </Button>
                    </Form>
                </Col>
                <Col md={9}>
                    <h2>My orders</h2>
                    {loadingOrders ? (
                        <Loader />
                    ) : errorOrders ? (
                        <Message variant="danger">{errorOrders}</Message>
                    ) : (
                        <Table striped borderd hover responsive className="table-sm">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Date</td>
                                    <td>Total</td>
                                    <td>Paid</td>
                                    <td>Status</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>{order.totalPrice}</td>
                                        <td>{order.isPaid ? "Paid" : "Not Paid"}</td>
                                        <td>
                                            {order.status === "0"
                                                ? "Pending"
                                                : order.status === "1"
                                                ? "Proccessd"
                                                : order.status === "2"
                                                ? "Shipped"
                                                : order.status === "3"
                                                ? "Deliverd"
                                                : "Failed"}
                                        </td>
                                        <td>
                                            <LinkContainer to={`/order/${order.id}`}>
                                                <Button className="btn-sm" variant="dark">Details</Button>
                                            </LinkContainer>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
