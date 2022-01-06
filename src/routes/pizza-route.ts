import express from "express";
import Pizza from "../models/pizza"

const pizzaRoutes = express.Router();

const specialtyPizzas: Pizza[] = [
{
    id: 1, 
    name: "Sushi-Za", 
    toppings: ["Cream Cheese", "Salmon", "Onions"]
},
{
    id: 2, 
    name: "Burger-Za", 
    toppings: ["Cheddar Cheese", "Ground Beef", "Mushrooms"]
},
{
    id: 3, 
    name: "Crab-Za", 
    toppings: ["White Cheese", "Crab", "capers"]
},
]; 
let nextID: number = 4

pizzaRoutes.get("/", function (req, res) {
    res.render("home");
})

// pizzaRoutes.get("/pizza-list", function (req, res) {
//     res.render("home")
// })

export default pizzaRoutes;