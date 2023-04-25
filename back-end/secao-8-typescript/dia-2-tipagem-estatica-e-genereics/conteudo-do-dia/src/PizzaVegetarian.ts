import Pizza from "../src/pizza";
import { Vegetarian } from "../src/PizzaFlavorsTypes";

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

export default PizzaVegetarian;