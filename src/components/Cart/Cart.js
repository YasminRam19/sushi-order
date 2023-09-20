import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const DUMMY_CART = [
  { id: "m1", name: "Sunset Roll", price: 153, amount: 2 },
  { id: "m1", name: "Sunset Roll", price: 153, amount: 2 },
];

const Cart = (props) => {
  const cartItems = DUMMY_CART.map((item) => (
    <li className={classes["cart-item"]}>
      <div>{item.name}</div>
      <div className={classes.amount}>{item.amount}</div>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>306</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
