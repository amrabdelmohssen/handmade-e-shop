import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/message/message";
import Loader from "../../components/loader/loader";
import { updateUserPassword } from "../../actions/userAction";
import FormContainer from "../../components/form/formContainer";

const UpdatePassword = ({ history, location }) => {
    const [passwordCurrent, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const dispatch = useDispatch();

    // const userDetails = useSelector((state) => state.userDetailsReducer);
    // const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLogin;

    const userUpadatePassword = useSelector(
        (state) => state.userUpdatePasswordReducer
    );
    const { success, error, loading } = userUpadatePassword;

    useEffect(() => {
        if (userInfo.length === 0) {
            history.push("/login");
        }
    }, [history, userInfo]);

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(
            updateUserPassword({
                password,
                passwordConfirm,
                passwordCurrent,
            })
        );
    };
    return (
        <FormContainer>
            <h1>Change Password</h1>
            {error && <Message variant="danger">{error}</Message>}
            {success && (
                <Message variant="success">
                    Password Updated Successfully
                </Message>
            )}
            {loading && <Loader />}
            <Form onSubmit={submitForm}>
                <Form.Group controlId="passwordCurrent">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Current Password"
                        value={passwordCurrent}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">
                    Update
                </Button>
            </Form>
        </FormContainer>
    );
};

export default UpdatePassword;
