import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Cart from "./components/Cart";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warnings, setWarnings] = useState(false);

  const handleClick = (event) => {
    let cartIsPresent = false;
    cart?.forEach((product) => {
      if (event._id === product._id) cartIsPresent = true;
    });
    if (cartIsPresent) {
      setWarnings(true);
      setTimeout(() => {
        setWarnings(false);
      }, 2000);
      return;
    }
    setCart([...cart, event]);
  };
  return (
    <>
      <NavBar size={cart?.length} />
      <Main handleClick={handleClick} />
      <Cart cart={cart} setCart={setCart}/>
      {
        warnings && <div className="warning">Already Added This Product</div>
      }
    </>
  );
}

export default App;
