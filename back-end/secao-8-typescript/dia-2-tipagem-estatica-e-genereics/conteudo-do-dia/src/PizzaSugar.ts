import Pizza from "../src/pizza";
import { Sugar } from "../src/PizzaFlavorsTypes";

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}

export default PizzaSugar;