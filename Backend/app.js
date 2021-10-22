const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const ordersRouter = require("./routers/orders")
const ProductRouter = require("./router/productRouter");
const OrderItemRouter = require("./router/OrderItemRouter");

const app = express();
require("dotenv/config");
const api = process.env.API_URL;

app.use(cors());
app.options("*", cors());

//middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));



// orders routers
app.use(`${api}/orders`,ordersRouter)



mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connection is ready..");
    })
    .catch((err) => {
        console.log(err);
    });
app.use(`${api}/productRouter`, ProductRouter);
app.use(`${api}/OrderItemRouter`, OrderItemRouter);

app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
});

