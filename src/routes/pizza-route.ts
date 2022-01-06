import express from "express";
import Pizza from "../models/pizza"

const pizzaRoutes = express.Router();

// const specialtyPizzas: Pizza[] = [
// {
//     id: 1, 
//     name: "Sushi-Za", 
//     price: 17
// },
// {
//     id: 2, 
//     name: "Burger-Za", 
//     price: 12
// },
// {
//     id: 3, 
//     name: "Crab-Za", 
//     price: 16
// },
// ]; 
// let nextID: number = 4

pizzaRoutes.get("/home", function (req, res) {
    res.render("home");
})

pizzaRoutes.get("/specialty-pizza", function (req, res) {
    let name = req.query.name as string;
    let rating = req.query.rating as string;
    res.render("specialty-pizza", {name, rating})
});

pizzaRoutes.get("/review", function (req, res) {
    res.render("review")
});

pizzaRoutes.post("/confirmation", function (req, res) {
    let name = req.body.name as string;
    let comment = req.body.comment as string;
    let rating = req.body.rating as string;
    res.render("confirmation", {name, rating, comment})
});
export default pizzaRoutes

