import "../card/card.scss";
import { Card } from "../card/card";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
const ListProducts = () => {
  const [dataState, setDataState] = useState([]);
  const [sortType, setSortType] = useState("sort");
  const [filterType, setFilterType] = useState("filterBrand");
  //call api
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // setDataState(products.productReducer.data.data)
  }, [dispatch]);
  // console.log(products.productReducer.length !== 0);
  // console.log(typeof products.productReducer !== "undefined");
  // console.log(products.productReducer);//w
  // console.log(products.productReducer.data);//w
  // console.log(typeof (products.productReducer.data));//w
  // console.log(Object.values(products.productReducer.data));
  // console.log(typeof (Object.values(products.productReducer.data)));

  // console.log(products.productReducer.data.data);
  // products.productReducer.data.data.name.map((name) => {
  //   console.log(name);
  // })
  // setData(products.productReducer.data);
  // console.log(data);
  // console.log(products.productReducer.data.name);

  // useEffect(() => {
  //   if (Array.isArray(products.productReducer)) {
  //     setData(products.productReducer);
  //   }
  // });
  // if (Array.isArray(products.productReducer)) {
  //   setData(products.productReducer)
  // }
  // old products arrobj
  // const brands = [...new Set(products.map((prod) => prod.brand))];

  // useEffect(() => {
  //   const sortArray = (type) => {
  //     const sortProperty = type;
  //     let sorted;
  //     if (sortProperty === "name") {
  //       sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
  //     } else {
  //       sorted = [...products].sort(
  //         (a, b) => b[sortProperty] - a[sortProperty]
  //       );
  //     }
  //     setDataState(sorted);
  //   };

  //   sortArray(sortType);
  // }, [sortType]);
  // useEffect(() => {
  //   const filterArray = (type) => {
  //     const filterProperty = type;
  //     let filtered;
  //     if (type === "filterBrand") {
  //       filtered = products;
  //     } else {
  //       filtered = [...products].filter(
  //         (product) => product.brand === filterProperty
  //       );
  //     }
  //     setDataState(filtered);
  //   };

  //   filterArray(filterType);
  // }, [filterType]);
  
  return (
    <>
      {products.productReducer.length !== 0 &&
        typeof products.productReducer !== "undefined" && (
          <div className="container-fluid mt-5 pt-5">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="container large-left-sider">
                  <div className="row pl-3">
                    <div className="col-12 pt-3">
                      <p
                        style={{
                          fontSize: "20px",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        price
                      </p>
                      <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="sort">no sort</option>
                        <option value="price">price</option>
                        <option value="name">name</option>
                        <option value="rating">rating</option>
                      </select>
                      <br />
                    </div>
                    <div className="col-12 pt-3">
                      <p
                        style={{
                          fontSize: "20px",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        brands
                      </p>
                      <select onChange={(e) => setFilterType(e.target.value)}>
                        <option value="filterBrand">no filter</option>
                        {/* {brands.map((brand, index) => (
                      <option value={brand} key={index}>
                        {brand}
                      </option>
                    ))} */}
                      </select>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 pl-0"
                style={{ borderLeft: "1px solid grey" }}
              >
                <div className="row">
                  {products.productReducer.data.data.map((product, index) => (
                    <Card
                      key={index}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
export default ListProducts;
