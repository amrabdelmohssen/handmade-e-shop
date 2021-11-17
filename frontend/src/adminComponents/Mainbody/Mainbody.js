import SidebarCard from "../Sidebar/SidebarCard/SidebarCard";
import axios from "axios";
import NavBar from '../NavBar/NavBar'


import { useEffect, useState } from "react";

import "./Mainbody.css";
import { Router } from "react-router";
import ChartData from "../ChartData/ChartData";
const Mainbody = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios({  
      method: "GET",
      url: "http://localhost:3000/api/v1/categories",
      withCredentials: false,
    })
      .then((res) => {
        setCategory(res.data.data.data);
        //console.log(category)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div>
      
      <NavBar/>
      <div className="main">
        <div className="card-title-ad">
          <h1>Summary</h1>
        </div>
        <div className="cards-warrper">
          <SidebarCard
            cardCount={category.length}
            name={"Categres"}
            className="admin-card"
          />
          <SidebarCard
            cardCount={"22.8k"}
            className="admin-card"
            Cardcolor={"#E55353"}
          />
          <SidebarCard
            cardCount={"22.8k"}
            className="admin-card"
            Cardcolor={"#F9B115"}
          />
          <SidebarCard
            cardCount={"22.8k"}
            className="admin-card"
            Cardcolor={"#3399FF"}
          />
        </div>
      </div>
      {/* <Router>
        <Routes />
      </Router> */}
      <ChartData />
    </div>
  );
};

export default Mainbody;
