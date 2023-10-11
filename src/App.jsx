import { useState } from "react";
import Navbar from "./components/Navbar";
import CategoryCard from "./components/CategoryCard";
import PizzaMenu from "./components/PizzaMenu";
import PastaMenu from "./components/PastaMenu";
import BarbecueMenu from "./components/BarbecueMenu";
import Cart from "./components/Cart";
import PaymentConfirmation from "./components/PaymentConfirmation";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsCartVisible(true);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);

    if (updatedCart.length === 0) {
      setIsCartVisible(false);
    }
  };

  const calculateTotal = () => {
    const totalPrice = cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
    return totalPrice;
  };

  const handlePayment = () => {
    setPaymentOpen(true);
  };

  const handlePaymentClose = () => {
    setPaymentOpen(false);
    setCart([]);
  };

  return (
    <div>
      <Navbar />
      <div className="food-categories">
        {/* Render category cards for each category */}
        {["pizzas", "pastas", "barbecues"].map((category) => (
          <CategoryCard
            key={category}
            category={category}
            handleCategoryClick={handleCategoryClick}
          />
        ))}
      </div>
      <div>
        <div className="subcategory-container">
          {/* Render subcategories or food items for the selected category */}
          {selectedCategory === "pizzas" && <PizzaMenu addToCart={addToCart} />}
          {selectedCategory === "pastas" && <PastaMenu addToCart={addToCart} />}
          {selectedCategory === "barbecues" && (
            <BarbecueMenu addToCart={addToCart} />
          )}
        </div>

        <div className="fixed-cart">
          {isCartVisible && (
            <Cart
              cart={cart}
              calculateTotal={calculateTotal}
              handlePayment={handlePayment}
              removeFromCart={removeFromCart}
            />
          )}
          <button
            className="hide-show-button"
            onClick={() => setIsCartVisible(!isCartVisible)}
          >
            {isCartVisible ? "Hide Cart" : <ShoppingBasketIcon />}
          </button>
        </div>
        <PaymentConfirmation
          open={paymentOpen}
          handleClose={handlePaymentClose}
          totalAmount={calculateTotal()}
        />
      </div>
    </div>
  );
}

export default App;
