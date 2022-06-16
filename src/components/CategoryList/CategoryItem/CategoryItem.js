import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <div className={classes.container}>
        <Link to={"/categories/" + category.categoryId}>  <img src={category.image} alt={category.title}/> </Link>
        <div className="title"><Link to={"/categories/" + category.categoryId}>{category.title} </Link></div>
      
      </div>
    </div>
  );
}

export default CategoryItem;