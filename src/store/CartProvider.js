import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_MEAL") {
    //When we add an item, we want to calculate the updatedTotalAmount first
    //And then we want to check if the item is already part of the cart
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //Index of the new item being added
    //This will be executed for each item, if the item we are currently looking at in that array has the same id as the item we are adding,
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(existingCartItemIndex);

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //amount: existingCartItem.item.amount + action.item.amount,
      console.log("existingCartItem", existingCartItem);
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //Items added for the fisrt time to the cart
      //In the payload we expect to receive all the data related to the item: name, amount of items, the price
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //To the payload we forward the item we expect to receive in the payload
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_MEAL", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_MEAL", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
