import { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  /*  const [enteredAmount, setEnteredAmount] = useState(1);
  const amountChangeHandler = (e) => {
    setEnteredAmount(enteredAmount);
  };
 */

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef(0);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    //If no value was entered
    if (
      // enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    //If input is valid -> execute the context method: addItem
    //BUT we will send it through props, because the context method needs more data that only the amount
    //props.onAddToCart(enteredAmountNumber);
    console.log("TEST");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          setp: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount 1-10</p>}
    </form>
  );
};

export default MealItemForm;
