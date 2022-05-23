import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
    <a href={"/categories/" + category.categoryId}>  <img src={category.image} alt={category.title} /></a>
      <div className={classes.container}>
        <Link to={"/categories/" + category.categoryId}>{category.title} </Link>
      
      </div>
    </div>
  );
}

export default CategoryItem;