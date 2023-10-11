import MenuItem from "./MenuItem";

const PizzaMenu = ({ addToCart }) => {
  const pizzaItems = [
    {
      name: "Margherita",
      price: 10,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696420073/my-food-app/margherita_ymvywn.jpg",
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Fresh Mozzarella Cheese",
        "Fresh Basil Leaves",
        "Olive Oil",
        "Salt and Pepper",
      ],
    },
    {
      name: "Pepperoni",
      price: 12,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696427894/my-food-app/pizza/fernando-andrade-_P76trHTWDE-unsplash_y8jnxx.jpg",
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Pepperoni Slices",
      ],
    },
    {
      name: "Vegetarian",
      price: 11,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696427895/my-food-app/pizza/edgar-castrejon-rzwe52hDK7w-unsplash_qp20jz.jpg",
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Sliced Bell Peppers",
        "Sliced Onions",
        "Sliced Mushrooms",
        "Sliced Olives",
        "Fresh Spinach Leaves",
      ],
    },
    {
      name: "Hawaiian",
      price: 13,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696427896/my-food-app/pizza/chad-montano-MqT0asuoIcU-unsplash_tnf4xs.jpg",
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Ham Slices",
        "Pineapple Chunks",
      ],
    },
    {
      name: "Supreme",
      price: 14,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696427894/my-food-app/pizza/faizan-saeed-8thte7ceLSw-unsplash_kf87fj.jpg",
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Pepperoni Slices",
        "Sausage Slices",
        "Sliced Bell Peppers",
        "Sliced Onions",
        "Sliced Black Olives",
        "Sliced Mushrooms",
      ],
    },
    {
      name: "BBQ Chicken",
      price: 15,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696427898/my-food-app/pizza/drake-whitney-pWqMo3bhv3A-unsplash_nhfmkl.jpg",
      ingredients: [
        "Pizza Dough",
        "Buffalo Sauce",
        "Cooked Chicken Pieces",
        "Mozzarella Cheese",
        "Sliced Red Onions",
        "Fresh Cilantro Leaves",
      ],
    },
  ];

  return <MenuItem items={pizzaItems} addToCart={addToCart} />;
};

export default PizzaMenu;
