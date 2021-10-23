const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const ProductRouter = require("./router/productRouter");
 



const app = express();
require("dotenv/config");
const api = process.env.API_URL;


app.use(cors());
app.options("*", cors());

//middlewares

app.use(express.json());
app.use(morgan("tiny"));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
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
    // routes
    app.use(`${api}/productRouter`,ProductRouter);


app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
});