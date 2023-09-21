import { useContext } from "react";
import classes from "./Meal.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const Meal = (props) => {
  //Format the price
  const price = `$${props.meal.price.toFixed(2)}`;

  //Establish the connection to the context so that we are able to call the addItem function.
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <img
          src={process.env.PUBLIC_URL + props.meal.img}
          alt={props.meal.name}
        />
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes.content}>
        <h3>{props.meal.name}</h3>
        <p>{props.meal.description}</p>
      </div>
      <div>
        <MealItemForm onAddTocart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Meal;
