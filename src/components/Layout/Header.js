import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.png";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>SUSHIROLL</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Plate with sushi rolls and nigiris" />
      </div>
    </>
  );
};

export default Header;
