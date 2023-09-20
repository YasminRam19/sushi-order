import React from "react";
//We add some default properties inside the context, which will help for auto-completion

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
