import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import{Navbar} from './navbar/navbar'
// import {Home} from '../pages/home/home'
import { Footer } from "./footer/footer";
function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            
            <Routes />
            <Footer/>
        </Router>
    );
}

export default App;
