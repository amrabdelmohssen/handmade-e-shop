import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import{Navbar} from './navbar/navbar'
import { Slider } from "./slider/slider";

function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            <Slider/>
            <Routes />
        </Router>
    );
}

export default App;
