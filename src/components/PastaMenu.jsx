import MenuItem from "./MenuItem";

const PastaMenu = ({ addToCart }) => {
  const pastaItems = [
    {
      name: "Spaghetti Carbonara",
      price: 12,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696429450/my-food-app/pasta/rob-wicks-_slDBXdJCdE-unsplash_vj6bh4.jpg",
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Pancetta or Guanciale",
        "Parmesan Cheese",
        "Black Pepper",
      ],
    },
    {
      name: "Fettuccine Alfredo",
      price: 11,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696429449/my-food-app/pasta/natalie-behn-2eVu7_gBnV0-unsplash_m0bgbx.jpg",
      ingredients: [
        "Fettuccine Pasta",
        "Heavy Cream",
        "Butter",
        "Parmesan Cheese",
        "Garlic",
      ],
    },
    {
      name: "Penne alla Vodka",
      price: 13,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696420075/my-food-app/spaghetti_kr0gs4.jpg",
      ingredients: [
        "Penne Pasta",
        "Vodka Sauce",
        "Heavy Cream",
        "Tomato Sauce",
        "Parmesan Cheese",
      ],
    },
    {
      name: "Linguine with Clams",
      price: 14,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696429447/my-food-app/pasta/ben-lei-flFd8L7_B3g-unsplash_feh8ra.jpg",
      ingredients: [
        "Linguine Pasta",
        "Clams",
        "Garlic",
        "White Wine",
        "Olive Oil",
        "Fresh Parsley",
      ],
    },
    {
      name: "Lasagna",
      price: 15,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696429452/my-food-app/pasta/sunorwind-PgkGsxjvGB4-unsplash_iuv5rd.jpg",
      ingredients: [
        "Lasagna Noodles",
        "Ground Beef",
        "Ricotta Cheese",
        "Mozzarella Cheese",
        "Tomato Sauce",
      ],
    },
    {
      name: "Pasta Primavera",
      price: 10,
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696429455/my-food-app/pasta/mgg-vitchakorn-PLyJqEJVre0-unsplash_hiiimy.jpg",
      ingredients: [
        "Pasta",
        "Assorted Vegetables",
        "Olive Oil",
        "Garlic",
        "Parmesan Cheese",
      ],
    },
  ];

  return <MenuItem items={pastaItems} addToCart={addToCart} />;
};

export default PastaMenu;
