import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import{Navbar} from './navbar/navbar'
// import {Home} from '../pages/home/home'
import { Footer } from "./footer/footer";
import Categories from './CategoryComp/Categories/Categories'
import ListProducts from "./listProducts/listProducts";
function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            <Categories/>
            <Routes />
            <Footer/>
        </Router>
    );
}

export default App;
