import classes from "./Input.module.css";
import React from "react";

//1. We wrap the component with React.forwardRef
//2. We get the ref which now can be set through the ref prop in the component
//3. Now we can set the red prop on the input element to the ref parameter

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input red={ref} {...props.input} />
    </div>
  );
});

export default Input;
