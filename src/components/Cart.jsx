import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Cart.css";

const Cart = ({ cart, calculateTotal, handlePayment, removeFromCart }) => {
  return (
    <div>
      <h2 className="cart-text">
        Cart <ShoppingBasketIcon />
      </h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <IconButton size="small" onClick={() => removeFromCart(index)}>
              <DeleteIcon className="remove-button" />
            </IconButton>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <Button
          variant="contained"
          color="error"
          onClick={handlePayment}
          disabled={cart.length === 0}
        >
          Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
