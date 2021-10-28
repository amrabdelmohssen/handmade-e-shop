<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutline } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "./card.scss";
function Card({
  name,
  description,
  image,
  brand,
  price,
  category,
  countingStock,
  rating,
  isFeatured,
}) {
  return (
    //     <div className="container mydiv">
    // <div className="row">
    <div className="col-md-4">
      {/* <!-- bbb_deals --> */}
      <div className="bbb_deals">
        {/* <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>4</span></div>
                <div className="bbb_deals_title">Today's Combo Offer</div> */}
        <div className="bbb_deals_slider_container">
          <div className=" bbb_deals_item">
            <div className="bbb_deals_image">
              <img src="https://i.imgur.com/9UYzfny.png" alt="" />
            </div>
            <div className="bbb_deals_content">
              <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                <div className="bbb_deals_item_category">
                  <a href="#">{category}</a>
                </div>
                {/* <div className="bbb_deals_item_price_a ml-auto"><strike>₹30,000</strike></div> */}
              </div>
              <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                <div className="bbb_deals_item_name">{name}</div>
                <div className="bbb_deals_item_price ml-auto">{price}</div>
              </div>
              <div className="available">
                <div className="available_line d-flex flex-row justify-content-start">
                  {isFeatured === true && (
                    <div className="available_title">
                      Available: <span>{countingStock}</span>
                    </div>
                  )}
                  <div className="sold_stars ml-auto">
                    {/* {" "}
                    <i class="fas fa-star"></i>{" "}
                    <i class="fas fa-star"></i>{" "}
                    <i class="fas fa-star"></i>{" "}
                    <i class="fas fa-star"></i>{" "}
                    <i class="fas fa-star"></i>{" "} */}
                    {[...Array(5)].map((_, index) =>
                      rating >= index + 1 ? (
                        <FontAwesomeIcon key={index} icon={faStar} />
                      ) : (
                        <FontAwesomeIcon key={index} icon={starOutline} />
                      )
                    )}
                  </div>
                </div>
                <div className="available_bar">
                  <span style={{ width: "17%" }}></span>
=======
import { Container, Col, Row } from "react-bootstrap"
import React from "react";
import "./card.scss";
export function Card( name,
  description,
  image,
  price,
)
   {
  const products = [
    {
      name: "labtop lenovo ",
      image: "",
      price: "5$",
    
    },
   
  ];
  return (
    <div>
      {products.map((product, index) => (
      
        <Col md={4}>
          
          <div className="bbb_deals">
          
            <div className="bbb_deals_slider_container ">
              <div className=" bbb_deals_item">
                <div className="bbb_deals_image">
                  <img src="https://i.imgur.com/9UYzfny.png" alt="" />
                </div>
                <div className="bbb_deals_content">
                  <div className="text-center">

                    <div className="bbb_deals_item_name text-dark ">{product.name}</div>
                    
                    <div className="bbb_deals_item_price ml-auto text-danger">
                      {product.price}
                    </div>
                    <button className=" btn-danger">update</button>
                  </div>
                 
>>>>>>> 11219f6b6aa48ac13ffff7ebe419282bbd9ac2cc
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </div>
    </div>
    //     </div>
    // </div>
  );
}
export default Card;
=======
        </Col>
      ))}
    </div>
  );
}
>>>>>>> 11219f6b6aa48ac13ffff7ebe419282bbd9ac2cc
