import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./MenuItem.css";

const MenuItem = ({ items, addToCart }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpansion = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="subcategory-item">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="subcategory-image"
          />
          <div className="subcategory-text">
            {item.name} - ${item.price}
            <Button variant="outlined" onClick={() => addToCart(item)}>
              <ShoppingCartIcon /> Add to Cart
            </Button>
            {/* Toggle button to expand/collapse the item */}
            <Button
              variant="outlined"
              onClick={() => toggleExpansion(index)}
              style={{ marginTop: "10px" }}
            >
              {expandedItem === index ? "Close" : "Ingredients"}
            </Button>
            {/* Ingredients list */}
            {expandedItem === index && (
              <ul>
                {item.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
