import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryProductCard from "../CategoryProductCard/CategoryProductCard";
import './CategoryProduct.css'

const CategoryProduct = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/api/v1/categories",
      withCredentials: false,
    })
      .then((res) => {
        setCategory(res.data.data.data);
        //console.log(category)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      withCredentials: false,
    })
      .then((res) => {
        setProducts(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {category.map((cate, index) => {
        return (
          <div style={{'backgroundColor': cate.color}} className="bigest-continer" key={index}>
              <Link className="links" to={`/products/${cate._id}`}>
                <h1>{cate.name}</h1>
              </Link>
            <div className="continer-cate-prod">
            {products
              .filter((prods, index) => {
                //
                return (prods.category === cate._id && prods.isFeatured  ) && prods;
              })
              .map((prod, index) => {
                return (
                  <div >
                    <Link className="links" to={`/product/${prod._id}`}>
                      <CategoryProductCard name={prod.name} image={prod.image} name={prod.name} price={prod.price}/>
                    </Link>
                  </div>
                );
              })}
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryProduct;
