import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes/routes";
import ListProducts from "./listProducts/listProducts";
function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <ListProducts />
    </>
  );
}

export default App;
