import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import{Navbar} from './navbar/navbar'
import { Footer } from "./footer/footer";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

//  import 'primeflex/primeflex.css';
import CategoryProduct from './mainHomeBody/CategoryProduct/CategoryProduct'

function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            <Routes />
            {/* <CategoryProduct/> */}
           
            <Footer />
            {/* <singleOrder/> */}
        </Router>
    );
}

export default App;
