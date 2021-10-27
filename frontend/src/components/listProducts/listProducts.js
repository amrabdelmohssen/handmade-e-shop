import "../card/card.scss";
import Card from "../card/card";
import React, { useState, useEffect } from "react";

function ListProducts() {
  const products = [
    {
      name: "pepsi",
      description: "cool drink",
      image: "",
      brand: "USA",
      price: 5,
      category: "drink",
      countingStock: 5,
      rating: 5,
      isFeatured: true,
    },
    {
      name: "fanta",
      description: "cool drink",
      image: "",
      brand: "MEX",
      price: 5,
      category: "drink",
      countingStock: 6,
      rating: 4,
      isFeatured: true,
    },
    {
      name: "sprite",
      description: "cool drink",
      image: "",
      brand: "USA",
      price: 3,
      category: "drink",
      countingStock: 2,
      rating: 4,
      isFeatured: true,
    },
    {
      name: "cofe",
      description: "hot drink",
      image: "",
      brand: "",
      price: 5,
      category: "drink",
      countingStock: 10,
      rating: 1,
      isFeatured: true,
    },
    {
      name: "water",
      description: "drink",
      image: "",
      brand: "NILE",
      price: 1,
      category: "drink",
      countingStock: 50,
      rating: 5,
      isFeatured: false,
    },
    {
      name: "amigo",
      description: "drink",
      image: "",
      brand: "MX",
      price: 1,
      category: "drink",
      countingStock: 50,
      rating: 5,
      isFeatured: false,
    },
    {
      name: "zabady",
      description: "drink",
      image: "",
      brand: "MX",
      price: 8,
      category: "drink",
      countingStock: 50,
      rating: 5,
      isFeatured: false,
    },
  ];
  const brands = [...new Set(products.map((prod) => prod.brand))];
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("sort");
  const [filterType, setFilterType] = useState("filterBrand");

  useEffect(() => {
    const sortArray = (type) => {
      const sortProperty = type;
      let sorted;
      if (sortProperty === "name") {
        sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sorted = [...products].sort(
          (a, b) => b[sortProperty] - a[sortProperty]
        );
      }
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);
  useEffect(() => {
    const filterArray = (type) => {
      console.log(type);
      const filterProperty = type;
      let filtered;
      if (type === "filterBrand") {
        filtered = products;
      } else {
        filtered = [...products].filter(
          (product) => product.brand === filterProperty
        );
      }
      setData(filtered);
    };

    filterArray(filterType);
  }, [filterType]);

  return (
    <>
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
                    price{" "}
                  </p>{" "}
                  <select onChange={(e) => setSortType(e.target.value)}>
                    <option value="sort"> no sort </option>{" "}
                    <option value="price"> price </option>{" "}
                    <option value="name"> name </option>{" "}
                    <option value="rating"> rating </option>{" "}
                  </select>{" "}
                  <br />
                </div>{" "}
                <div className="col-12 pt-3">
                  <p
                    style={{
                      fontSize: "20px",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    brands{" "}
                  </p>{" "}
                  <select onChange={(e) => setFilterType(e.target.value)}>
                    <option value="filterBrand"> no filter </option>{" "}
                    {brands.map((brand, index) => (
                      <option value={brand} key={index}>
                        {" "}
                        {brand}{" "}
                      </option>
                    ))}{" "}
                  </select>{" "}
                  <br />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* <select onChange={(e) => setSortType(e.target.value)}>
                          <option value="sort">no sort</option>
                          <option value="price">price</option>
                          <option value="name">name</option>
                          <option value="rating">rating</option>
                        </select>
                        <select onChange={(e) => setFilterType(e.target.value)}>
                          <option value="filterBrand">no filter</option>
                          {brands.map((brand, index) => (
                            <option value={brand} key={index}>
                              {brand}
                            </option>
                          ))}
                        </select> */}{" "}
          <div
            className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 pl-0"
            style={{ borderLeft: "1px solid grey" }}
          >
            <div className="row">
              {" "}
              {data.map((product, index) => (
                <Card
                  key={index}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                  countingStock={product.countingStock}
                  rating={product.rating}
                  isFeatured={product.isFeatured}
                />
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
export default ListProducts;

//  <div onChange={(e) => setSortType(e.target.value)}>
//         <input type="radio" value="price" name="sort" /> price <br />
//         <input type="radio" value="name" name="sort" /> name <br />
//         <input type="radio" value="rating" name="sort" /> rating <br />
//       </div>
//       <div onChange={(e) => setFilterType(e.target.value)}>
//         <input type="radio" value="USA" name="filter" /> USA <br />
//         <input type="radio" value="MEX" name="filter" /> MEX <br />
//       </div>
