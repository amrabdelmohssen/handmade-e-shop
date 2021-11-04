import { Container, Col, Row, Carousel, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutline } from "@fortawesome/free-regular-svg-icons";
import { Parser } from "html-to-react";
import { getProduct } from "../../actions/productAction";
import "./productDetail.scss";
import { ProductSearch } from "../productSearch/productSearch";


function ProductDetail({ match, history }) {
    const [qty, setQty] = useState(1);
    const { productReducer: product } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        if (match.params.id) {
            dispatch(getProduct(match.params.id));
        }
    }, [dispatch, match.params.id]);
    console.log(product);
    const addProductToCart = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    return (
        <>
        <ProductSearch/>
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
                                    {product.data.data.countInStock > 0 && (
                                        <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.data.data.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    )}
                                </div>
                                <br />
                                <div className="product-actions">
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
      </>  
    );
}

export default ProductDetail;
