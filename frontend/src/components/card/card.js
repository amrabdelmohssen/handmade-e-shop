import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import "./card.scss";
export function Card({name, description, image, price}) {
  // const products = [
  //   {
  //     name: "labtop lenovo ",
  //     image: "",
  //     price: "5$",
  //   },
  // ];
  return (
    <>
        <Col md={4}>
          <div className="bbb_deals">
            <div className="bbb_deals_slider_container ">
              <div className=" bbb_deals_item">
                <div className="bbb_deals_image">
                  <img src="https://i.imgur.com/9UYzfny.png" alt="" />
                </div>
                <div className="bbb_deals_content">
                  <div className="text-center">
                    <div className="bbb_deals_item_name text-dark ">
                      {name}
                    </div>

                    <div className="bbb_deals_item_price ml-auto text-danger">
                      {price}
                    </div>
                    <button className=" btn-danger">update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
    </>
  );
}
