import SidebarCard from "../Sidebar/SidebarCard/SidebarCard";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Mainbody.scss";
import { Router } from "react-router";
import ChartData from "../ChartData/ChartData";
const Mainbody = ({history}) => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [totalSales, setTotalSales] = useState([]);
    const userLogin = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLogin;
    const getOrderCount = ()=>{
        axios({
            method: "GET",
            url: "http://localhost:3000/api/v1/orders/get/count",
            withCredentials: false,
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        })
            .then((res) => {
                setOrders(res.data.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getProductCount = ()=>{
        axios({
            method: "GET",
            url: "http://localhost:3000/api/v1/products/get/count",
            withCredentials: false,
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        })
            .then((res) => {
                setProducts(res.data.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getUsersCount = ()=>{
        axios({
            method: "GET",
            url: "http://localhost:3000/api/v1/users/get/count",
            withCredentials: false,
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        })
            .then((res) => {
                console.log(res.data.userCount)
                setUsers(res.data.userCount);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    const getTotalsales = ()=>{
        axios({
            method: "GET",
            url: "http://localhost:3000/api/v1/orders/get/totalsales",
            withCredentials: false,
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        })
            .then((res) => {
                setTotalSales(res.data.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    useEffect(() => {
        if (userInfo.length === 0) {
            history.push("/login");
        } else {
            getOrderCount();
            getProductCount();
            getUsersCount();
            getTotalsales();
        }
    }, []);
    return (
        <div>
            <NavBar />
            <Card>
                <div className="p-grid">
                    <SidebarCard stats={orders} css={"d-orders"} name={"Orders"} icon={"pi-shopping-cart"} />
                    <SidebarCard stats={products} css={"d-products"} name={"Products"} icon={"pi-briefcase"} />
                    <SidebarCard stats={users} css={"d-users"} name={"Users"} icon={"pi-users"} />
                    <SidebarCard stats={`${totalSales}$`} name={"Total Sales"} icon={"pi-dollar"} css={"d-totalsales"} />
                </div>
                <div className="p-grid">
                    <ChartData />
                </div>
            </Card>
        </div>
    );
};

export default Mainbody;
