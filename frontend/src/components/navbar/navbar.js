import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { logout } from "../../actions/userAction";
import CategoryService from "../../services/categoryService";

import "./navbar.scss";
export function Navbar() {
  const [ categories ,setCategories] = useState([]);
  const [ isBusy ,setIsBusy] = useState(false);
  const dispatch = useDispatch();

const getcategory = ()=> async()=>{
    const res = await CategoryService.getAllCateUserApi()

    setCategories(res.data)

    // console.log(categories,"ddddddddddddd")
}

  useEffect(() => {
 
      // dispatch(getCateAction());

      async function run(){CategoryService.getAllCateUserApi()
        .then((res) => {
          setCategories(res.data.data.data);
          // if(typeof categories[0].name != "undefined"){
            setIsBusy(true)
          console.log(res.data,"ddddddddddddd")
          console.log(categories[0].name)
          // console.log(categories[0].name,"ddddddddddddd")

          //  }
  
        })
        .catch((err) => {
          console.log(err);
        });
      }
      run()
    
  }, []);

  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;
  const logoutHandle = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className="navBar navbar-background navbar navbar-expand-lg navbar-light  px-5 d-flex justify-content-between ">
        <Link to="/" className="navbar-brand">
          HANDMADE{" "}
        </Link>

        <button
          className="navbar-toggler mb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-end collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <div className="text-right navbar-nav mr-auto ">
            <li className="nav-item ">
              <Link to={"/"} className="nav-links nav-link px-3">
                HOME
              </Link>
            </li>
            <li className="nav-item ">
            <Dropdown  className="nav-links ">
              
            <Dropdown.Toggle className="  navBar-drop-button"  id="dropdown-basic">
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
            >
           {typeof categories !== "undefined" ? categories.map((cate, index)=>{
                return(


              <Dropdown.Item className=" nav-links" >
                <Link key = {index} to={`/products/${cate._id}`}>
                    {cate.name}
                </Link>
              </Dropdown.Item>
                )}):""}
            </Dropdown.Menu>
          </Dropdown>




              {/* <Link to={"/products"} className="nav-links nav-link px-3">
                PRODUCTS
              </Link> */}
            </li>
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-links nav-link px-3">
                ABOUT
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to={"/contact"} className="nav-links nav-link px-3">
                CONTACT
              </Link>
            </li>
            {typeof userInfo !== "undefined" && !Array.isArray(userInfo) ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-links nav-link dropdown-toggle px-1"
                  to={"/"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userInfo.data.user.name}
                  <i className="fas fa-user-alt ps-2"></i>
                </Link>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link to={"/changePassword"} className="nav-links nav-link">
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <Link to={"/profile"} className="nav-links nav-link">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item" onClick={logoutHandle}>
                    <div className="nav-links nav-link " style={{cursor:"pointer"}}>Logout</div>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link to={"/login"} className="nav-links nav-link px-3">
                  Sign in
                </Link>
              </li>
            )}

            <li className=" nav-item ">
              <Link to={"/cart"} className="nav-links nav-link">
                <i className="fas fa-shopping-cart px-3"></i>
              </Link>
            </li>
          </div>
        </div>
      </nav>
      
      

          </>
  );
}
