import { Container, Col, Row, Carousel } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutline } from "@fortawesome/free-regular-svg-icons";
import { Parser } from "html-to-react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import "./productDetail.scss";
function ProductDetail() {
    let initialValues = {
        counter: "1",
    };
    const { productReducer: product } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        }
    }, [dispatch, id]);
    console.log(product);
    const addProductToCart = () => {};

    return (
        <div className="product-grid">
            <Container>
                {product.length !== 0 && (
                    <>
                        <Row>
                            <Col lg={6} className="mt-5">
                                <Carousel variant="dark">
                                    {product.data.data.images.map((image, index) => (
                                        <Carousel.Item key={index} interval={2000}>
                                            <img className="d-block w-100" src={image} alt="First slide" style={{ height: "25rem" }} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                            <Col lg={6} className="product mt-5">
                                <h2 className="product-name">{product.data.data.name}</h2>
                                <p className="product-desc">{product.data.data.description}</p>
                                <div className="product-rating">
                                    {[...Array(5)].map((_, index) =>
                                        product.data.data.rating >= index + 1 ? (
                                            <FontAwesomeIcon key={index} icon={faStar} />
                                        ) : (
                                            <FontAwesomeIcon key={index} icon={starOutline} />
                                        )
                                    )}
                                </div>
                                <div className="product-price ">
                                    ${product.data.data.price} <span className="price-before">${product.data.data.price + 18}</span>
                                </div>
                                <div className="product-quantity ">
                                    <label htmlFor="quantity">Quantity</label>
                                    <br />
                                    <Formik initialValues={initialValues} enableReinitialize={true}>
                                        {(formik) => {
                                            return (
                                                <Form>
                                                    <Field
                                                        className="number"
                                                        id="quantity"
                                                        type="number"
                                                        min="1"
                                                        step="1"
                                                        onClick={(e) => {
                                                            formik.setFieldValue("counter", `${e.target.value}`);
                                                        }}
                                                        onKeyUp={(e) => {
                                                            formik.setFieldValue("counter", `${e.target.value}`);
                                                        }}
                                                        name="counter"
                                                    ></Field>
                                                </Form>
                                            );
                                        }}
                                    </Formik>
                                </div>
                                <br />
                                <div className="product-actions">
                                    <button className="btn btn-primary me-3">Buy Now</button>
                                    <button className="btn btn-primary" onClick={addProductToCart}>
                                        Add to Cart
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5 product-rich-desc">
                            <Col lg={12}>
                                <div className="">{Parser().parse(product.data.data.richDescription)}</div>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
}

export default ProductDetail;
