import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import { Navbar } from "./navbar/navbar";
// import {Home} from '../pages/home/home'
import { Footer } from "./footer/footer";
import ListProducts from "./listProducts/listProducts";
function App() {
<<<<<<< HEAD
    return (
        <Router>
            <Navbar/>
            <br/>
            <Routes />
            <Footer/>
        </Router>
        // <>
        // <ListProducts/>
        // </>
    );
=======
  return (
    <Router>
      <Navbar />
      <br/>
      <Routes />
      <Footer />
    </Router>
    // <>
    // <ListProducts/>
    // </>
  );
>>>>>>> 627bcbd172c993e9c7e9fc11e7967ec7e4d62f22
}

export default App;
