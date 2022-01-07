import express from "express";
import Pizza from "../models/pizza";

const pizzaRoutes = express.Router();


pizzaRoutes.get("/home", function (req, res) {
  res.render("home");
});

pizzaRoutes.get("/specialty-pizza", function (req, res) {
  let name = req.query.name as string;
  let rating = req.query.rating as string;
  let price = req.query.price as string;
  res.render("specialty-pizza", { name, rating, price });
});

pizzaRoutes.get("/review", function (req, res) {
  res.render("review");
});

pizzaRoutes.post("/confirmation", function (req, res) {
  let name = req.body.name as string;
  let comment = req.body.comment as string;
  let rating = req.body.rating as string;
  res.render("confirmation", { name, comment, rating });
});

pizzaRoutes.get("/customPizza", function (req, res) {
  res.render("customPizza");
});

pizzaRoutes.post("/yourPizza", function (req, res) {
  let size = req.body.size as string;
  let toppings = req.body.toppings as number;
  let checkbox: boolean = !!req.body.checked;
  let instructions = req.body.instructions as string;

  let price: number = 0;
  let freeDelivery: boolean = false;

  if (size === "Large"){ price = 12 + toppings * 1.25};
  if (size === "Medium"){ price = 10 + toppings * 1};
  if (size === "Small"){ price = 7 + toppings * 0.50};
  if (checkbox = true){ price += 2};
  if (price >= 15) {freeDelivery = true};
  
  res.render("yourPizza", { size, toppings, checkbox, instructions, price, freeDelivery });
});

export default pizzaRoutes;
