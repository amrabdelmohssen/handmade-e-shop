import React, { useEffect, useState } from "react";
import { getSingleOrder,updateOrder } from "../../actions/orderAdminAction";
import { connect, useDispatch, useSelector } from "react-redux";

const Order = (props) => {
  console.log(props);
  const { id } = props.match.params;
  const single = useSelector((state) => state);
  const dispatch = useDispatch(); //
  const [status, setStatus] = useState("");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    if (id) {
      dispatch(getSingleOrder(id));
    }
  }, [id]);

  if (typeof single.rootReducer.singleOrderData !== "undefined") {
    console.log(single.rootReducer.singleOrderData,"mmmmmmmmmmmmm");
    // console.log(single.rootReducer.singleOrderData);
    // console.log(single.rootReducer.singleOrderData);
    // console.log(single.rootReducer.singleOrderData);
    // console.log(single.rootReducer.singleOrderData);
    // console.log(single.rootReducer.singleOrderData);
    // console.log(single.rootReducer.singleOrderData);
    // console.log(single.rootReducer.singleOrderData);
  }

  // console.log(single.rootReducer.singleOrderData,'single')

useEffect(() => {
 if(single.rootReducer.singleOrderData)setStatus(single.rootReducer.singleOrderData.status)
}, [single.rootReducer.singleOrderData])
 


useEffect(() => {
  if(update) dispatch(updateOrder(id,status))
   setUpdate(false)
 }, [update])
  return (
    <>
      {typeof single.rootReducer.singleOrderData!== "undefined" && (
        <div className="container">
          <div className="card">
            <div className="card-body m-4 p-4">
              <figure>
                <blockquote className="blockquote">
                  <p>View Order</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  You can edit in order status here
                </figcaption>
              </figure>
            </div>
          </div>
          <p
            className="blockquote-footer"
            style={{
              border: "1px solid #8080804d",
              margin: "0 35px",
              padding: "10px",
              fontSize: " 20px",
              width: "180px",
              backgroundColor: "#808080e0",
              color: "black",
              position: "relative",
            }}
          >
            Order Details
          </p>
          <div
            className="card "
            style={{ marginTop: "-30px", position: "unset" }}
          >
            <div className="card-body" style={{ marginTop: "100px" }}>
              <div className="row">
                <div className="col m-4 ">
                  <p style={{ fontSize: "22px" }}>Order Id</p>
                  <p>{single.rootReducer.singleOrderData.id}</p>
                </div>
                <div className="col m-4 ">
                  <p style={{ fontSize: "22px" }}>Order Date</p>
                  <p>
                    {single.rootReducer.singleOrderData.dateOrdered}
                  </p>
                </div>
                <div className="col m-4 ">
                  <p style={{ fontSize: "22px" }}>city</p>
                  <p>{single.rootReducer.singleOrderData.city}</p>
                </div>
                <div className="col m-4 ">
                  <p style={{ fontSize: "22px" }}>shippingAddress2</p>
                  <p>{single.rootReducer.singleOrderData.shippingAddressTwo}</p>
                </div>
                <div className="col m-4">
                  <p style={{ fontSize: "22px" }}>Order Status</p>
 

                  <select
                    onChange={(e) =>{
                        setStatus(e.target.value);
                        setUpdate(true)
                    } }
                    value={status}
                  >
                    <option value="0">Pending</option>
                    <option value="1">Proccessd</option>
                    <option value="2">Shipped</option>
                    <option value="3">Deliverd</option>
                    <option value="4">Failed</option>
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col m-4 order-1">
                  <p style={{ fontSize: "22px" }}>shippingAddress1</p>
                  <p>{single.rootReducer.singleOrderData.shippingAddress1}</p>
                </div>
                </div>
                <div className="row mt-5">
                <div className="col m-4 order-1">
                  <p style={{ fontSize: "22px" }}>country</p>
                  <p>{single.rootReducer.singleOrderData.country}</p>
                </div>
                </div>

              <div className="row mt-5">
                <div className="col m-2 ">
                  <p style={{ fontSize: "22px" }}>phone</p>
                  <p>{single.rootReducer.singleOrderData.phone}</p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col m-4 order-1">
                  <p style={{ fontSize: "22px" }}>Order Total Price</p>
                  <p>
                    {single.rootReducer.singleOrderData.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  singleOrderData: state.singleOrderData,
});

export default connect(mapStateToProps, { getSingleOrder })(Order);
