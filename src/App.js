import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCarIsShown] = useState(false);
  const showCartHandler = () => {
    setCarIsShown(true);
  };
  const hideCartHandler = () => {
    console.log("CLOSE backdrop");
    setCarIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
