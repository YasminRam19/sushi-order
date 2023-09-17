import classes from "./AvailableMeals.module.css";
import m1Img from "../../assets/m1.jpg";
import m2Img from "../../assets/m2.jpg";
import m3Img from "../../assets/m3.jpg";
const dummyMeals = [
  {
    id: "m1",
    name: "Sunset Roll",
    description: "Mango, aguacate, nuez caramelizada y salsa de anguila.",
    price: 153,
    img: { m1Img },
  },
  {
    id: "m2",
    name: "Kushiague Queso",
    description: "Crujiente brocheta de queso Manchego empanizada.",
    price: 153,
    img: { m2Img },
  },
  {
    id: "m3",
    name: "Inn Roll",
    description:
      "Hoja de pepino, Tampico, camarón kushiage y salsa de anguila.",
    price: 153,
    img: { m3Img },
  },
];

const AvailableMeals = () => {
  const mealsList = dummyMeals.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
