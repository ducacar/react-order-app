import "./CategoryCard.css";

const CategoryCard = ({ category, handleCategoryClick }) => {
  let imageUrl;

  switch (category.toLowerCase()) {
    case "pizzas":
      imageUrl =
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696420073/my-food-app/pizza_gmiqko.jpg";
      break;
    case "pastas":
      imageUrl =
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696420073/my-food-app/pasta_sdzoug.jpg";
      break;
    case "barbecues":
      imageUrl =
        "https://res.cloudinary.com/dgwtmmyl7/image/upload/v1696420077/my-food-app/barbecue_rc6xuq.jpg";
      break;
    default:
      imageUrl = "";
      break;
  }

  return (
    <div
      className="category-card"
      onClick={() => handleCategoryClick(category)}
    >
      <div className="category-image-container">
        <img src={imageUrl} alt={category} className="category-image" />
        <div className="category-title">{category}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
