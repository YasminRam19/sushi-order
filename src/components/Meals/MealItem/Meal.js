import classes from "./Meal.module.css";
import MealItemForm from "./MealItemForm";
const Meal = (props) => {
  //Format the price
  const price = `$${props.meal.price.toFixed(2)}`;

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
        <MealItemForm />
      </div>
    </li>
  );
};

export default Meal;
