import {Link} from "react-router-dom";
import { Search } from "../search/search";
import './navbar.css'
export function Navbar() {
    return (
    <>
        <nav className="navBar navbar navbar-expand-lg navbar-light  px-5 mx-5 d-flex justify-content-between " >
            
            <a href="/users" className="navbar-brand">HANDMADE </a>



            <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="justify-content-end collapse navbar-collapse " id="navbarSupportedContent">
                <div className="text-right navbar-nav mr-auto ">
                    <li className="nav-item ">
                        <Link to={"/"} className="nav-links nav-link px-3">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/products"} className="nav-links nav-link px-3">PRODUCTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/about"} className="nav-links nav-link px-3">ABOUT</Link>
                    </li>
                    <li className="nav-item me-5">
                        <Link to={"/contact"} className="nav-links nav-link px-3">CONTACT</Link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-links nav-link dropdown-toggle px-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Amr
                            <i className="fas fa-user-alt ps-2"></i>
                        </a>
                        <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                            <li><Link to={"/changePassword"} className="nav-links nav-link">Change Password</Link></li>
                            <li><Link to={"/updateProfile"} className="nav-links nav-link">Update Profile</Link></li>
                            <li className="nav-item"><Link to={"/login"} className="nav-links nav-link">Login </Link></li> 
                        </ul>
                    </li>
        
                    <li className=" nav-item ">
                        <Link to={"/cart"} className="nav-links nav-link">
                            <i className="fas fa-shopping-cart px-3"></i>
                        </Link>
                    </li>
            </div>
        </div>
    </nav>
<Search/>
            
            {/* ------------------- */}

      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </>
    )


}