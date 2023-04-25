import Pizza from "../src/pizza";
import { Common } from "../src/PizzaFlavorsTypes";

interface PizzaCommon extends Pizza {
  flavor: Common
}

export default PizzaCommon;