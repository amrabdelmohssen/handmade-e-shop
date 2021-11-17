import { Navbar, Nav, Container } from "react-bootstrap";
import { Sidebar  } from "primereact/sidebar";
import { Button  } from "primereact/button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState({ name: "visible" });

  return (
    <>
      <Navbar bg="dark" variant="dark">
       
        <Sidebar style={{"color": "#fff"}} className="sidebar-continer" visible={visible} onHide={() => setVisible(false)} >
          <Link className="link-styling" to={"/getusers"}>Usres</Link>
          <Link to={"/listorders"}>Orders</Link>
          <Link href="#">Products</Link>
          <Link to={"/getcategoryadmin"}>Category</Link>
        </Sidebar>
        <Container>
        <Button className="button-sidebar" icon="pi pi-arrow-right" onClick={(e) => setVisible(true)}/>

          {/* <Sidebar className="sidebar-shape" /> */}
          <Navbar.Brand >  <Link to={"/admin"}>Admin</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Summary</Nav.Link>
            <Nav.Link href="#features">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
