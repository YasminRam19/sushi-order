import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  //Destructuring of the items
  const { items } = cartCtx;

  const numberOfCartItem = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  //Bump animation of the cart Button in the header every time we add or delete and item.
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    //it bumps, but only the first time we add something to the cart, the animation is only played when the class is added for the 1st time
    //Therefore, we need to remove the class after the animation is finished, the 300ms is the time the animation longs
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    //Clean up time/side effect
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Yout cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
