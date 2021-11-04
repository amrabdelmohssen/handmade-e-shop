import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchAction } from "../../actions/searchAction";
import "./poroductSearch.scss";
import ProductRate from "../../components/rating/rating";

export  function ProductSearch() {
  const { searchReducer: searchProducts } = useSelector((state) => state);


  

  const[productName,setProductName] = useState("")

    const val = (e)=>{
        setProductName(e.target.value)
        
    }



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAction(productName));

    // console.log(searchProducts,'test')
    // console.log('prodName', ProdName.length)
  }, [productName]);

  //console.log(searchProducts.results,'test33')
  //console.log(window.location.pathname)

  return (
      <>
   <div className="search">

                <form  className="d-flex justify-content-center px-5 mx-5 col-sm-9 col-md-6 col-lg-6 " action={'/productSearch'}>
                     <input className="form-control me-2" type="search" onChange={(e)=>val(e)}  placeholder="Search" aria-label="Search" ></input>
                     <button className="navBar-search-button" type="submit">Search
                     </button>
                </form>
                
            </div>





      {
         
      typeof searchProducts.data !== "undefined" ? (
      
        window.location.pathname === "/productSearch" ? (
          <div className="card-container my-5 py-5">
            <div className=" container div-card">
              {searchProducts.data.data.map((e, i) => {
                debugger;
                return (
                  <div
                    key={i}
                    className="col-lg-3 col-sm-8 col-md-5 card-div-parent text-center  px-1 m-3"
                  >
                    <img className="cart-image" src={e.image} />
                    <p className="pt-1">{e.name}</p>
                    <div className="d-flex justify-content-center">
                      <small className="px-1">EGP</small>
                      <h5>{e.price}</h5>
                    </div>
                    <ProductRate />
                      
                      <Link className="button-details cart-button pt-1" to={`/product/${e.id}`}>
                        Details
                      </Link>{" "}
                    {/* </button> */}
                  </div>
                );
              })}
            </div>
          </div>
        ) : productName.length !== 0? (
          searchProducts.data.data.map((e, i) => {
            return (
              <div className="col-sm-9 col-md-6 col-lg-6">
                <Link className="search-name-link " to={`/product/${e.id}`}>
                  <div key={i} className="search-name">
                    <h6>{e.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <h1></h1>
        )
      ) : (
        <h3></h3>
      )}

     
       </>
  );
}
