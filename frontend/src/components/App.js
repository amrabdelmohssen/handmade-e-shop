import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import { Navbar } from "./navbar/navbar";
// import {Home} from '../pages/home/home'
import { Footer } from "./footer/footer";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

// import singleOrder from "./order/singleOrder";
// import { SINGLE_ORDER } from "../actions/types";

function App() {
    return (
        <Router>
            <Navbar />
            <br />
             
            <Routes />
            
           
            <Footer />
            {/* <singleOrder/> */}
        </Router>
    );
}

export default App;
