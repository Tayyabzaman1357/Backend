const express = require("express");
const { config } = require("dotenv");
const cors = require("cors")
const app = express();

app.use(cors())


app.get("/", (req, res) => {
  res.send("This is Home Page");
});
app.get("/products",(req,res) =>{
    res.json({Products})
})



const Products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 100 },
  { id: 5, name: "Product 5", price: 200 },
  { id: 6, name: "Product 6", price: 300 },
  { id: 7, name: "Product 7", price: 100 },
  { id: 8, name: "Product 8", price: 200 },
  { id: 9, name: "Product 9", price: 300 },
  { id: 10, name: "Product 10", price: 300 },
];



const Port = process.env.PORT || 4000;

app.listen(Port, (req, res) => {
  console.log("This is server running" + Port);
});
