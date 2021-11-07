import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import{Navbar} from './navbar/navbar'
import { Footer } from "./footer/footer";
import ListProducts from "./listProducts/listProducts";
function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            <Routes />
            <Footer />
        </Router>
    );
}

export default App;
