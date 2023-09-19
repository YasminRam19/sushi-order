import Meal from "./MealItem/Meal";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const dummyMeals = [
  {
    id: "m1",
    name: "Sunset Roll",
    description: "Mango, aguacate, nuez caramelizada y salsa de anguila.",
    price: 153,
    img: "images/m1.jpg",
  },
  {
    id: "m2",
    name: "Kushiague Queso",
    description: "Crujiente brocheta de queso Manchego empanizada.",
    price: 56,
    img: "images/m2.jpg",
  },
  {
    id: "m3",
    name: "Inn Roll",
    description:
      "Hoja de pepino, Tampico, camarón kushiage y salsa de anguila.",
    price: 125,
    img: "images/m3.jpg",
  },
];

//Passing meal is equivalent to send property by property. name={meal.name} description={meal.description}, etc.
const AvailableMeals = () => {
  const mealsList = dummyMeals.map((meal) => <Meal meal={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
