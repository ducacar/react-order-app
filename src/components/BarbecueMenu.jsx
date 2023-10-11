import MenuItem from "./MenuItem";

const BarbecueMenu = ({ addToCart }) => {
  const barbecueItems = [
    {
      name: "BBQ Ribs",
      price: 18,
      ingredients: ["Ribs", "BBQ Sauce", "Salt", "Pepper"],
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696428833/my-food-app/bbq/ahmad-RbI-U-WRuLw-unsplash_k0laqp.jpg",
    },
    {
      name: "Grilled Chicken",
      price: 16,
      ingredients: ["Chicken Pieces", "BBQ Marinade", "Salt", "Pepper"],
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696428834/my-food-app/bbq/sam-moghadam-khamseh-VpOpy6QrDrs-unsplash_pj4oa2.jpg",
    },
    {
      name: "Pulled Pork Sandwich",
      price: 14,
      ingredients: ["Pulled Pork", "BBQ Sauce", "Hamburger Buns", "Coleslaw"],
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696428832/my-food-app/bbq/rachel-bramlett-9-MDbSrsOOw-unsplash_grze1e.jpg",
    },
    {
      name: "Smoked Brisket",
      price: 20,
      ingredients: ["Brisket", "Dry Rub", "Wood Chips"],
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696420074/my-food-app/bbq_uagplh.jpg",
    },
    {
      name: "Barbecue Burger",
      price: 12,
      ingredients: [
        "Ground Beef Patty",
        "BBQ Sauce",
        "Burger Bun",
        "Lettuce",
        "Tomato",
      ],
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696428833/my-food-app/bbq/fabio-alves-AgqZPNcHR6w-unsplash_xtqlrn.jpg",
    },
    {
      name: "Vegetable Skewers",
      price: 13,
      ingredients: ["Assorted Vegetables", "BBQ Marinade"],
      image:
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696428830/my-food-app/bbq/farhad-ibrahimzade-AfsZ1KC2huY-unsplash_wxyfcl.jpg",
    },
  ];

  return <MenuItem items={barbecueItems} addToCart={addToCart} />;
};

export default BarbecueMenu;
